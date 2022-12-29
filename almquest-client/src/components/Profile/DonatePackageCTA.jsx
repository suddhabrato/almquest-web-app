import React from "react";
import Package from "../Forms/Package";

const DonatePackageCTA = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 lg:flex max-w-4xl w-full shadow-lg rounded-xl my-12 mx-auto">
      <div className="lg:w-2/5">
        <div
          className="h-64 bg-cover lg:h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
          }}
        ></div>
      </div>

      <div className="max-w-xl px-6 py-12 lg:max-w-4xl lg:w-3/5">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          Donate Your Meal<span className="text-blue-500"> Now</span>
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-300">
          As a <b>Donor</b>, you can donate meals from anywhere and we will try
          to find the perfect <b>Distributor</b> for you. If we find a pair for
          you, we will provide all the necessary contact information and
          directions to the meet location.
          <br />
          <b>Happy Donating!</b>
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <Package />
        </div>
      </div>
    </div>
  );
};

export default DonatePackageCTA;
