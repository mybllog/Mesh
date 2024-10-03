import React from "react";
import img1 from "../assets/images/Rectangle 2.png";
import carbon from "../assets/images/carbon_security.png";
import fluent from "../assets/images/fluent_money-20-regular.png";
import solar from "../assets/images/solar_graph-broken.png";
import streamline from "../assets/images/streamline_industry-innovation-and-infrastructure.png";
import product from "../assets/images/Rectangle 8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  
  return (
    <div className="relative w-full h-auto overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src={img1} alt="img1" className="w-full h-full object-cover" />
        <div className="absolute top-20 sm:top-32 left-4 sm:left-10 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-newRomain leading-8">
            Where Innovation <br /> Meets Boundless <br /> Possibilities
          </h1>
          <p className="mt-4 text-xs sm:text-lg lg:text-base xl:text-xl font-bold font-Opensans">
            With an unwavering dedication to innovation and <br /> excellence,
            we shape tomorrow's solutions. Join <br /> us as we harness
            technology's power to create <br /> inspiring, transformative
            experiences, shaping a <br /> brighter future.
          </p>
          <div className="mt-4 w-40 lg:w-36 lg:h-10 bg-[#D9D9D9] rounded-lg cursor-pointer">
            <div className="flex items-center justify-center h-full text-black">
              <p className="mr-2 font-Opensans font-semibold text-sm">
                Get started
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="px-4 py-10 sm:px-14 sm:py-16 space-y-6 font-Opensans">
        <h2 className="uppercase text-lg text-[#6DA8FF]">What we do</h2>
        <p className="text-sm sm:text-base">
          Making life a bit more fun by providing solutions to <br /> daily
          problems
        </p>
        <div className="flex flex-wrap justify-between gap-y-6 sm:gap-y-0">
          {[
            { icon: solar, title: "Efficiency" },
            { icon: fluent, title: "Cost Efficiency" },
            { icon: streamline, title: "Innovation" },
            { icon: carbon, title: "Security" },
          ].map((item, index) => (
            <div key={index} className="w-full sm:w-1/4 text-center">
              <div className="w-14 h-14 mx-auto bg-[#6DA8FF] rounded-lg flex items-center justify-center mb-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h2 className="font-bold text-xs sm:text-sm text-black">
                {item.title}
              </h2>
              <p className="font-normal text-xs sm:text-sm">
                Our streamlined processes ensure <br /> prompt, quality project{" "}
                <br /> completion, utilizing the latest <br /> tools for
                efficient results.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="text-center md:my-6">
        <h2 className="text-[#6DA8FF] text-lg sm:text-xl font-bold">
          Our Products
        </h2>
        <div className="w-full max-w-lg mx-auto bg-[#FAFAFA] shadow-lg rounded-md mt-6">
          <div className="flex flex-col justify-center items-center py-8">
            <img
              src={product}
              alt="product"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
            <p className="font-bold text-sm mt-4">Glover</p>
            <p className="font-normal text-xs sm:text-sm">Lorem ipsum ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
