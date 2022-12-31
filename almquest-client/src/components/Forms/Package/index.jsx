import React from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { useAlertContext } from "../../../contexts/AlertContext";

const Package = () => {
  const { user } = useUserContext();
  const { displayAlert } = useAlertContext();
  const navigate = useNavigate();
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [isDisabledLocation, setDisabledLocation] = useState(true);

  const toggleDisabled = () => {
    setDisabledLocation((prev) => !prev);
  };
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [packageDetails, setPackageDetails] = useState({
    donor_id: "",
    quantity: "",
    travelCapacity: "",
    location: "",
  });

  const options = {
    componentRestrictions: { country: "in" },
    fields: ["geometry", "name"],
  };

  //autocomplete places api util
  useEffect(() => {
    if (!isOpen) return;
    console.log("MAP API CALLED!");
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
      setPackageDetails((prev) => ({
        ...prev,
        location: loc,
      }));
    });
  }, [isDisabledLocation]);

  const fetchDonorInfo = async () => {
    try {
      console.log(user);
      if (user) {
        const { id, userType } = user;
        if (userType !== "donor") {
          displayAlert(
            "error",
            "Whoa! We don&apos;t do that here!",
            "Distributors cannot donate packages!"
          );
          return navigate("/");
        }
        const res = await axios.get(`/api/donor/${id}`);
        const { location, phone, distanceRange, name } = res.data.data;
        setPackageDetails({
          donor_id: id,
          quantity: "",
          travelCapacity: distanceRange,
          location: location,
        });
        setName(name);
        setContact(phone);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchDonorInfo();
  }, []);

  useEffect(() => {
    console.log(packageDetails);
  }, [packageDetails]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPackageDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const body = {
        ...packageDetails,
        timestamp: Date.now(),
        donor_name: name,
        donor_phone: contact,
      };
      console.log(body);
      const res = await axios.post("/api/donor/donate", body);
      console.log(res);
      setOpen(false);
      displayAlert(
        "success",
        "Package successfully added!",
        "Please wait while we find a distributor for your package."
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="relative flex justify-center">
        <button
          onClick={toggle}
          className="inline-flex items-center justify-center w-full px-5 py-3 mt-4 overflow-hidden text-white transition-colors duration-300 bg-amber-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-amber-500 focus:ring focus:ring-amber-300 focus:ring-opacity-80"
        >
          <svg
            className="w-5 h-5 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
          <span className="mr-2">Donate a Package</span>
        </button>
        {isOpen && (
          <div
            className={`transition duration-300 ease-in-out ${
              isOpen
                ? "translate-y-0 opacity-100 sm:scale-100"
                : "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            } fixed inset-0 z-10 overflow-y-auto`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute w-full h-full bg-opacity-20 bg-gray-300 transition backdrop-blur-md duration-300 ease-in dark:bg-gray-800 dark:bg-opacity-20"></div>
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
                  Enter the details for the package. Once you donate, you cannot
                  retract the donation.
                  <br /> Here is the contact no. you provided{" "}
                  <a className="text-amber-800" href={"tel:" + { contact }}>
                    +91 {contact}
                  </a>
                </p>

                <form className="mt-4" onSubmit={handleSubmit}>
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
                      value={packageDetails.quantity}
                      onChange={handleChange}
                      placeholder="Number of meals"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-amber-300"
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
                      type="text"
                      name="travelCapacity"
                      id="travelCapacity"
                      value={packageDetails.travelCapacity}
                      onChange={handleChange}
                      placeholder="10 Kilometres"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-amber-300"
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
                      ref={inputRef}
                      type="text"
                      disabled={isDisabledLocation}
                      placeholder={packageDetails.location.address}
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-amber-300  disabled:text-gray-400"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={toggleDisabled}
                    className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-amber-600 transition-colors duration-300 hover:text-amber-400 focus:outline-none dark:text-amber-400 dark:hover:text-amber-500"
                  >
                    {isDisabledLocation ? (
                      <svg
                        className="w-4 h-4"
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
                        className="w-4 h-4"
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
                      type="submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40"
                    >
                      Donate Package
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
