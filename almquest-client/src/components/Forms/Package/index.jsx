import React from "react";
import { useState } from "react";

const Package = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDisabledLocation, setDisabledLocation] = useState(true);
  const toggleDisabled = () => {
    setDisabledLocation((prev) => !prev);
  };
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const [packageDetails, setPackageDetails] = useState({
    donor_id: "",
    quantity: 0,
    travelCapacity: 0,
    location: "",
  });
  return (
    <>
      <div className="relative flex justify-center">
        {!isOpen ? (
          <button
            onClick={toggle}
            className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Open Modal
          </button>
        ) : (
          <div
            x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            className={`${
              isOpen
                ? "translate-y-0 opacity-100 sm:scale-100"
                : "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            }transition duration-300 ease-in-out z-10 overflow-y-auto`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 dark:text-white"
                  id="modal-title"
                >
                  Add a package
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Your new project has been created. Invite your team to
                  collaborate on this project.
                </p>

                <form className="mt-4" action="#">
                  <label
                    htmlFor="quantity"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Quantity
                  </label>
                  <label className="block mt-2" htmlFor="quantity">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      placeholder="Number of meals"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label
                    htmlFor="travelCapacity"
                    className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                  >
                    Travel Capacity
                  </label>
                  <label className="block mt-2" htmlFor="travelCapacity">
                    <input
                      type="number"
                      name="travelCapacity"
                      id="travelCapacity"
                      placeholder="10 Kilometres"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label
                    htmlFor="location"
                    className=" block mt-3 text-sm text-gray-700 dark:text-gray-200"
                  >
                    Your Current Location
                  </label>
                  <label className="block mt-2" htmlFor="location">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={"94/2 c road"}
                      disabled={isDisabledLocation}
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300  disabled:text-gray-400"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={toggleDisabled}
                    className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    {isDisabledLocation ? (
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    )}

                    <span className="mx-1">
                      {isDisabledLocation
                        ? "Edit Current Location"
                        : "Save Location"}
                    </span>
                  </button>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={toggle}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Send invites
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Package;
