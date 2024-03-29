import React from "react";
import { useState } from "react";

const RegForm = ({
  handleChange,
  handleSubmit,
  donor,
  distributor,
  inputRef,
  personalDetails,
}) => {
  const [userType, setUserType] = useState("Donor");
  const handleClickDonor = () => {
    setUserType("Donor");
  };
  const handleClickDistributor = () => {
    setUserType("Distributor");
  };

  const handleInputChange = (evt) => {
    handleChange(evt, userType);
  };
  const handleFormSubmit = (evt) => {
    handleSubmit(evt, userType);
  };
  const activeclassName =
    "flex justify-center w-full px-6 py-3 mt-4 md:mt-0 text-white bg-amber-500 rounded-lg md:w-auto md:mx-2 focus:outline-none";
  const inactiveclassName =
    "flex justify-center w-full px-6 py-3 mt-4 text-amber-500 border border-amber-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-amber-400 dark:text-amber-400 focus:outline-none";
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              userType == "Distributor"
                ? `url('https://images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
                : `url('https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        ></div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Lets get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">
                Select type of account
              </h1>

              <div className="mt-3 md:flex md:items-center md:-mx-2">
                <button
                  onClick={handleClickDonor}
                  className={
                    userType === "Donor" ? activeclassName : inactiveclassName
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>

                  <span className="mx-2">Donor</span>
                </button>

                <button
                  onClick={handleClickDistributor}
                  className={
                    userType === "Distributor"
                      ? activeclassName
                      : inactiveclassName
                  }
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    ></path>
                  </svg>

                  <span className="mx-2">Distributor</span>
                </button>
              </div>
            </div>

            <form
              id="donor-distributor-reg"
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={personalDetails.name}
                  onChange={handleInputChange}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={personalDetails.email}
                  onChange={handleInputChange}
                  className="block w-full px-5 py-3 mt-2  disabled:text-gray-400 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:disabled:text-gray-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  disabled
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Phone number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={personalDetails.phone}
                  onChange={handleInputChange}
                  placeholder="XXX-XXX-XXXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Location
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="123 Main Avenue"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>
              {userType == "Donor" ? (
                <>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Select Category
                    </label>
                    <select
                      name="donorType"
                      value={donor.donorType}
                      onChange={handleInputChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    >
                      <option value="Individual">Individual</option>
                      <option value="Organisation">Organisation</option>
                      <option value="Food Chain">Food Chain</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      How far can you travel?
                    </label>
                    <input
                      name="distanceRange"
                      value={donor.distanceRange}
                      type="number"
                      onChange={handleInputChange}
                      placeholder="8 Kilometres"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      How much food can your carry?
                    </label>
                    <input
                      name="maxCapacity"
                      type="number"
                      value={distributor.maxCapacity}
                      onChange={handleInputChange}
                      placeholder="45 Kilograms"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      How much area can you cover?
                    </label>
                    <input
                      name="distanceRange"
                      type="number"
                      value={distributor.distanceRange}
                      onChange={handleInputChange}
                      placeholder="15 Kilometres"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                </>
              )}

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-lg hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50">
                <span>Register as {userType} </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegForm;
