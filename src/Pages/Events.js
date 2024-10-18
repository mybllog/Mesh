import React from 'react';
import Timer from "../Components/Countdown/Timer";
import { Helmet } from 'react-helmet';
const Events = () => {
  return (
   <>
     <Helmet>
        <title>Upcoming Events - Coming Soon</title>
        <meta name="description" content="Stay tuned for our upcoming events. The website is coming soon!" />
        <meta name="keywords" content="events, upcoming events, coming soon" />
      </Helmet>
    <header className="flex flex-col text-center justify-center min-h-screen">
      <div className="m-8 md:m-20">
        <h1 className="text-2xl md:text-4xl lg:text-6xl lg:tracking-widestfont-bold mb-4">
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
      </div>
    </header>
   </>
  );
};

export default Events;
