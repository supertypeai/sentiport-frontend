import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { UserContext } from "@/contexts/UserContext";

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

const UserContextWrapper = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("userSession");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userSession"));
    const updateToken = async () => {
      const response = await fetch(
        `https://sentiport.de.r.appspot.com/api/token/refresh/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: token?.refresh }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        localStorage.setItem("userSession", JSON.stringify(data));
        const userInfo = parseToken(data.access);
        const { user_id } = userInfo;
        fetch(`https://sentiport.de.r.appspot.com/api/users/${user_id}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.access}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUser(data);
          });
      } else {
        logoutUser();
      }

      if (loading) {
        setLoading(false);
      }
    };

    if (token) {
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
        token: authTokens?.access,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const Mainframe = ({ children }) => {
  const siteDescription =
    "Automated Report Generation of Mobile App Review with Supertype Summary, a done-for-you programmatic PDF generation service.";

  return (
    <UserContextWrapper>
      <Head>
        <title>
          Supertype Summary | An automated report generator of your mobile app
          review.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />

        {/* <meta property="og:image" content="/collective_promo.png" /> */}
        <meta property="og:title" content="Supertype Summary" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content="Supertype Summary" />

        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar />
      <main className="backdrop-blur-lg break-words" id="mainframe">
        <div className="px-6 lg:px-20 mx-auto py-8 lg:py-20">{children}</div>
        <Footer />
      </main>
    </UserContextWrapper>
  );
};

export default Mainframe;
