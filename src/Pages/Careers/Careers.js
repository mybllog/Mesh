import React from 'react';
import Preloader from "../../Components/Preloader/Preloader";
import Timer from "../../Components/Countdown/Timer";
import Optin from "../../Components/Optin/Optin";

const Careers = () => {
  return (
    <div className="flex flex-col text-center justify-center min-h-screen bg-blue-100">
      <div className="m-10 md:m-20">
        <h1 className="text-3xl md:text-6xl lg:tracking-widest font-bold">
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
      </div>
      {/* Optional: Add the Optin component below if needed */}
      {/* <Optin /> */}
    </div>
  );
};

export default Careers;
