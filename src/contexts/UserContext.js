import { createContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

export const UserContext = createContext();

const parseToken = (token) => {
  const base64URL = token.split(".")[1];
  const base64 = base64URL.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const UserContextWrapper = ({ children }) => {
  const [authTokens, setAuthTokens] = useLocalStorage("userSession", null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
  };

  useEffect(() => {
    const updateToken = async () => {
      if (loading) {
        setLoggingIn(true);
      }

      const response = await fetch(
        `https://sentiport.de.r.appspot.com/api/token/refresh/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: authTokens?.refresh }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        localStorage.setItem("userSession", JSON.stringify(data));
        const userInfo = parseToken(data.access);
        setUser(userInfo);
        setLoggingIn(false);
      } else {
        setLoggingIn(false);
        logoutUser();
      }

      if (loading) {
        setLoading(false);
      }
    };

    if (authTokens) {
      if (loading) {
        updateToken();
      }

      let fourteenMinutes = 1000 * 60 * 14;

      let interval = setInterval(() => {
        if (authTokens) {
          updateToken();
        }
      }, fourteenMinutes);
      return () => clearInterval(interval);
    }
  }, [authTokens, loading]);

  return (
    <UserContext.Provider
      value={{
        u: [user, setUser],
        token: authTokens ? authTokens.access : null,
        loggingIn: loggingIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
