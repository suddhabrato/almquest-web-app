import React from "react";
import Charitybro from "../../assets/Charity-bro.svg";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 lg:px-32 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Best Place To choose your Clothes
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
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
