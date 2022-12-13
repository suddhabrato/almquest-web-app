import React from "react";

const Hero = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-32 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Best Place To choose your Clothes
              </h1>

              <p class="mt-4 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-3/4 h-full lg:max-w-3xl"
              src="src/assets/Charity-bro.svg"
              alt="Charity-bro.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
