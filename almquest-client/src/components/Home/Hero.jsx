import React from "react";
import Charitybro from "../../assets/Charity-bro.svg";

const Hero = ({ pageRefs }) => {
  return (
    <section
      className="bg-white dark:bg-gray-900"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, hero: el })}
    >
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
                day, we are here to make a change. With AlmQuest you can be
                assured, that the food you donate will reach the people who need
                it the most.
              </p>

              <button className="w-full px-6 py-3 mt-6 text-md tracking-wide font-normal text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-lg lg:w-auto hover:bg-amber-500 focus:outline-none focus:bg-amber-500">
                Join Us in our quest
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
