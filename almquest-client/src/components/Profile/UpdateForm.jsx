import React from "react";

const UpdateForm = () => {
  return (
    <>
      <h1 className="text-4xl break-words text-center md:text-start font-semibold tracking-wide text-gray-800 capitalize dark:text-white">
        Edit your Details
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Update the fields below to modify your profile details and click on Save
        Changes once you are done.
      </p>
      <form
        id="donor-distributor-reg"
        className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        onSubmit={handleSubmit}
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
            onChange={handleChange}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
            onChange={handleChange}
            className="block w-full px-5 py-3 mt-2  disabled:text-gray-400 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:disabled:text-gray-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
            onChange={handleChange}
            placeholder="XXX-XXX-XXXX"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Location
          </label>
          <input
            type="text"
            placeholder="123 Main Avenue"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                onChange={handleChange}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                onChange={handleChange}
                placeholder="8 Kilometres"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                onChange={handleChange}
                placeholder="45 Kilograms"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                onChange={handleChange}
                placeholder="15 Kilometres"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
          </>
        )}

        <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          <span>Discard Changes </span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          <span>Save Changes </span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export default UpdateForm;
