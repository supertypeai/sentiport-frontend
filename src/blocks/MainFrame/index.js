import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { UserContext } from "@/contexts/UserContext";

const UserContextWrapper = ({ children }) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    function checkUser() {
      const sessionToken = sessionStorage.getItem("userSession");
      setToken(sessionToken ? sessionToken : false);
    }
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ token: token }}>
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
      <main
        className={`backdrop-blur-lg break-words bg-gradient-to-b from-black to-blue-500`}
        id="mainframe"
      >
        <div className="flex flex-col justify-between items-center px-2 sm:px-4 lg:px-8 mx-auto my-12">
          {children}
        </div>
        <Footer />
      </main>
    </UserContextWrapper>
  );
};

export default Mainframe;
