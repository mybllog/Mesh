import React from 'react';
import Timer from "../Components/Countdown/Timer";

const Events = () => {
  return (
    <div className="flex flex-col text-center justify-center min-h-screen">
      <div className="m-8 md:m-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
      </div>
    </div>
  );
};

export default Events;
