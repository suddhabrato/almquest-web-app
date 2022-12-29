import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateForm = ({
  toggleEditForm,
  getProfile,
  personalDetails,
  userType,
  id,
  donor,
  distributor,
}) => {
  const navigate = useNavigate();
  const [newPersonalDetails, setNewPersonalDetails] = useState(personalDetails);
  const [newDonor, setNewDonor] = useState(donor);
  const [newDistributor, setNewDistributor] = useState(distributor);
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "in" },
    fields: ["geometry", "name"],
  };
  //autocomplete places api util
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const loc = {
        address: place.name,
        coordinates: [
          place.geometry.location.lat(),
          place.geometry.location.lng(),
        ],
      };
      setNewPersonalDetails((prev) => ({
        ...prev,
        location: loc,
      }));
    });
  }, []);

  useEffect(() => {
    console.log(newPersonalDetails);
    console.log(newDonor);
    console.log(newDistributor);
  }, [newPersonalDetails, newDonor, newDistributor]);

  const handleDiscard = () => {
    toggleEditForm();
  };

  const submitDonor = async (donor) => {
    try {
      console.log(donor);
      const res = await axios.patch(`/api/donor/update/${id}`, donor);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const submitDistributor = async (distributor) => {
    try {
      console.log(distributor);
      const res = await axios.patch(
        `/api/distributor/update/${id}`,
        distributor
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (userType === "donor") {
      const body = {
        ...newDonor,
        ...newPersonalDetails,
      };
      await submitDonor(body);
    } else {
      const body = {
        ...newDistributor,
        ...newPersonalDetails,
      };
      await submitDistributor(body);
    }
    getProfile();
    toggleEditForm();
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    if (["name", "email", "phone"].includes(evt.target.name)) {
      setNewPersonalDetails((prev) => ({
        ...prev,
        [evt.target.name]: value,
      }));
    } else {
      if (userType === "donor") {
        setNewDonor((prev) => ({
          ...prev,
          [evt.target.name]: value,
        }));
      } else {
        setNewDistributor((prev) => ({
          ...prev,
          [evt.target.name]: value,
        }));
      }
    }
  };
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
            value={newPersonalDetails.name}
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
            value={newPersonalDetails.email}
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
            value={newPersonalDetails.phone}
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
            ref={inputRef}
            type="text"
            placeholder={newPersonalDetails.location.address}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {userType === "donor" ? (
          <>
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Select Category
              </label>
              <select
                name="donorType"
                value={newDonor.donorType}
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
                value={newDonor.distanceRange}
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
                value={newDistributor.maxCapacity}
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
                value={newDistributor.distanceRange}
                onChange={handleChange}
                placeholder="15 Kilometres"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
          </>
        )}

        <button
          onClick={handleDiscard}
          type="button"
          className="mt-4 flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        >
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
        <button
          type="submit"
          className="lg:mt-4 flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
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
