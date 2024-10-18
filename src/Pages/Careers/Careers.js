import React from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet for managing head tags
import Preloader from "../../Components/Preloader/Preloader";
import Timer from "../../Components/Countdown/Timer";
import Optin from "../../Components/Optin/Optin";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Website Coming Soon</title>
        <meta name="description" content="Join our team! Our website is coming soon. Stay tuned for career opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Careers - Website Coming Soon" />
        <meta property="og:description" content="Join our team! Our website is coming soon. Stay tuned for career opportunities." />
        <meta property="og:image" content="URL_to_your_image" />
        <meta property="og:url" content="URL_to_your_page" />
      </Helmet>
      <main className="flex flex-col text-center justify-center min-h-screen bg-blue-100">
        <header className="m-10 md:m-20">
          <h1 className="text-3xl md:text-6xl lg:tracking-widest font-bold">
            Website
            <br />
            Coming Soon
          </h1>
        </header>
        <section>
          <Timer />
        </section>
        {/* Optional: Add the Optin component below if needed */}
        {/* <Optin /> */}
      </main>
    </>
  );
};

export default Careers;
