import React from "react";
import { NavLink } from "react-router-dom";
import Charitybro from "../../assets/Charity-bro.svg";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 lg:px-32 py-16 mx-auto">
        <div className="items-center lg:flex flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2 px-2 mt-6 lg:mt-0">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Help us make the World a Better Place
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {/* AlmQuest brings to you the opportunity to be the one to donate
                food or, be the one to get in touch with such donors and
                distribute the food where its needed. */}
                In a world where 800 million people who go hungry every single
                day, we are here to make a change. With AlmQuest you can be assured, that
                the food you donate will reach the people who need it the most.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Join Us{}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              className="w-3/4 h-full lg:max-w-3xl"
              src={Charitybro}
              alt="Charity-bro.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
