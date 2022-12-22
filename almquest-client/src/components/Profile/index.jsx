import React from "react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userType, setUserType] = useState("Distributor");
  const [isEditing, setEditing] = useState(true);
  const [personalDetails, setPersonalDetails] = useState({
    picture: "",
    name: "",
    email: "",
    phone: "",
  });

  const [donor, setDonor] = useState({
    donorType: "Individual",
    distanceRange: "",
  });

  const [distributor, setDistributor] = useState({
    distanceRange: "",
    maxCapacity: "",
  });

  useEffect(() => {
    const tempUser = JSON.parse(localStorage.getItem("temp_user"));
    const regUser = JSON.parse(localStorage.getItem("reg_user"));
    if (tempUser) navigate("/register", { replace: true });
    if (regUser) {
      const { name, email, picture } = regUser;
      setPersonalDetails({ ...personalDetails, name, email, picture });
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  const handleChange = (evt, userType) => {
    const value = evt.target.value;
    if (["name", "email", "phone"].includes(evt.target.name)) {
      setPersonalDetails((prev) => ({
        ...prev,
        [evt.target.name]: value,
      }));
    } else {
      if (userType === "Donor") {
        setDonor((prev) => ({
          ...prev,
          [evt.target.name]: value,
        }));
      } else {
        setDistributor((prev) => ({
          ...prev,
          [evt.target.name]: value,
        }));
      }
    }
  };

  const submitDonor = async (donor) => {
    try {
      console.log(donor);
      const res = await axios.post("/api/donor/register", donor);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const submitDistributor = async (distributor) => {
    try {
      console.log(distributor);
      const res = await axios.post("/api/distributor/register", distributor);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (evt, userType) => {
    evt.preventDefault();
    if (userType === "Donor") {
      const body = {
        ...donor,
        ...personalDetails,
      };
      submitDonor(body);
    } else {
      const body = {
        ...distributor,
        ...personalDetails,
      };
      submitDistributor(body);
    }
    const body = { email: personalDetails.email };
    const checkReg = await axios.post("/api/checkExist", body);
    const tempUser = JSON.parse(localStorage.getItem("temp_user"));
    tempUser.userType = checkReg.data.userType;
    tempUser.id = checkReg.data.id;
    localStorage.setItem("reg_user", JSON.stringify(tempUser));
    localStorage.removeItem("temp_user");
    navigate("/", { replace: true });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen mt-16">
        <div className="rounded-lg shadow-lg border-gray-100 dark:border-gray-700 border-2 flex-col items-center h-full w-full max-w-3xl p-8 mx-4 lg:px-12 lg:w-3/5">
          <div className="flex justify-center -mt-20 md:mx-8 md:justify-end">
            <img
              className="object-cover w-32 h-32 border-4 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            />
          </div>
          <div className="w-full mt-4 md:mt-0">
            <h1 className="text-4xl text-center md:text-start font-semibold tracking-wide text-gray-800 capitalize dark:text-white">
              {!isEditing ? personalDetails.name : "Edit your Details"}
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              {!isEditing
                ? userType
                : "Update the fields below to modify your profile details and click on Save Changes once you are done."}
            </p>
            {!isEditing ? (
              <form
                id="donor-distributor-reg"
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                    {personalDetails.name}
                  </h1>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h1 className="mx-2 text-lg text-gray-700 dark:text-white truncate ...">
                    {personalDetails.email}
                  </h1>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                    +91 8584920325
                  </h1>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                    123 Main Avenue
                  </h1>
                </div>

                {userType == "Donor" ? (
                  <>
                    <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                        Individual
                      </h1>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                        15 Kilometres
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>
                      <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                        11 Meals
                      </h1>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
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
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                        15 Kilometres
                      </h1>
                    </div>
                  </>
                )}

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Update Profile </span>
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  <span>Delete Profile</span>
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </form>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
