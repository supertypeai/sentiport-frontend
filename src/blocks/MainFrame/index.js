import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { UserContextWrapper } from "@/contexts/UserContext";

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
        {children}
        <Footer />
      </main>
    </UserContextWrapper>
  );
};

export default Mainframe;
