import { createContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

export const UserContext = createContext();

export const UserContextWrapper = ({ children }) => {
  const [authTokens, setAuthTokens] = useLocalStorage("userSession", null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const logoutUser = () => {
      setAuthTokens(null);
      setUser(null);
    };

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
        const userInfoResponse = await fetch(
          `https://sentiport.de.r.appspot.com/api/credits/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access}`,
            },
          }
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo?.user);
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
  }, [authTokens, setAuthTokens, loading]);

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
