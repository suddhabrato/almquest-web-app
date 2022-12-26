import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Package = {
  _id: "63a69de12d697bc12a0a06ce",
  donor_id: "",
  donor_name: "Suddhabrato Ghosh",
  donor_phone: "8584920325",
  current_state: "Paired",
  timestamp: "2022-12-24T15:07:56.717+00:00",
  location: {
    coordinates: [],
    address: "94/74 C Road, Anandapuri, Barrackpore",
  },
  quantity: 3,
  travelCapacity: 13,
  pair: {
    distributor_id: "",
    distributor_name: "Aditya Das",
    distributor_phone: "9123065598",
    distributor_location: {
      coordinates: [],
      address: "94/74 C Road, Anandapuri, Barrackpore",
    },
    meet_location: {
      coordinates: [],
      address: "",
    },
    distributor_path: "",
    donor_path: "",
  },
};
const Transactions = ({ id }) => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(Package);
  const [userType, setUserType] = useState("");
  const getPackage = async () => {
    try {
      const regUser = JSON.parse(localStorage.getItem("reg_user"));
      if (!regUser) navigate("/");
      setUserType(regUser.userType);
      const res = await axios.get(`/api/package/${id}`);
      console.log(res.data);
      setTransaction(res.data.package);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPackage();
  }, [id]);

  return (
    <section className="mx-4">
      <div className="my-16 rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h2 className="my-2 text-4xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Package Details
          </h2>
          {transaction.current_state === "Paired" ? (
            <button className="mx-2 mt-4 rounded-full max-w-full px-4 py-1.5 border-2 border-blue-500 dark:border-blue-400">
              <p className="text-blue-500 dark:text-blue-400 truncate font-semibold tracking-wide">
                Status: {transaction.current_state}
              </p>
            </button>
          ) : (
            <button className="mx-2 mt-4 rounded-full max-w-full px-4 py-1.5 border-2 border-gray-500 dark:border-gray-300">
              <p className="text-gray-500 dark:text-gray-300 truncate font-semibold tracking-wide">
                Status: {transaction.current_state}
              </p>
            </button>
          )}
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row mt-2 sm:mt-0">
          <button className="mt-2 rounded-full max-w-full px-4 py-1.5 bg-gray-50 dark:bg-gray-800 shadow-md">
            <p className="text-gray-500 dark:text-gray-400 truncate">
              Package ID: {transaction._id}
            </p>
          </button>
        </div>
        {transaction.current_state === "Paired" ? (
          <>
            <div className="grid grid-cols-1 gap-6 mt-8 mb-4 sm:grid-cols-2">
              <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"
                    fill="currentColor"
                  ></path>
                </svg>

                <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white truncate">
                  {moment(transaction.timestamp, moment.ISO_8601).format("lll")}
                </h1>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9837 21.9999C6.47237 21.9938 2.00605 17.5203 2 11.9999C2.39311 12.1112 2.79955 12.168 3.20803 12.1689C4.55933 12.1789 5.82888 11.5217 6.6025 10.412C7.29413 9.41154 7.44027 8.13091 6.99186 6.99997C7.27858 7.05119 7.5692 7.07729 7.86045 7.07797C9.1552 7.08764 10.3841 6.50698 11.2 5.49998C11.9984 4.52274 12.3106 3.2352 12.0486 2C17.5625 2.01795 22.0178 6.50963 21.9999 12.0324C21.982 17.5553 17.4976 22.0178 11.9837 21.9999ZM12.7455 18.5679C12.8991 18.634 13.0645 18.6681 13.2317 18.6679C13.7362 18.6674 14.1909 18.363 14.3842 17.8961C14.5775 17.4293 14.4714 16.8919 14.1152 16.5339C13.8805 16.2998 13.5629 16.1683 13.2317 16.1679C12.6392 16.1693 12.1294 16.5877 12.0115 17.1693C11.8937 17.7509 12.2004 18.3353 12.7455 18.5679ZM6.91199 16.8749C7.11205 16.9578 7.32647 17.0003 7.54296 16.9999C8.21842 16.9997 8.82678 16.5907 9.08272 15.9646C9.33866 15.3385 9.19143 14.6195 8.71006 14.1449C8.3989 13.838 7.97969 13.6659 7.54296 13.6659C6.62442 13.667 5.88022 14.4129 5.87967 15.3329C5.87984 16.0017 6.2781 16.606 6.89202 16.8689H6.89702H6.908L6.91199 16.8749ZM16.3276 14.3679C16.9987 14.6502 17.775 14.4627 18.2439 13.9051C18.7127 13.3475 18.7652 12.5493 18.3733 11.9349C18.2506 11.7436 18.0902 11.5793 17.9021 11.4519C17.3853 11.1024 16.7167 11.0716 16.17 11.3721C15.6233 11.6726 15.2902 12.254 15.307 12.8784C15.3238 13.5028 15.6877 14.0654 16.2498 14.3359H16.2378L16.2677 14.3489L16.2877 14.3569H16.2817C16.296 14.3615 16.31 14.3669 16.3236 14.3729L16.3276 14.3679ZM11.9837 10.333C11.5855 10.3323 11.2426 10.6141 11.1655 11.0054C11.0883 11.3967 11.2986 11.7879 11.6672 11.9389C12.0357 12.0899 12.4594 11.9583 12.6782 11.625C12.8969 11.2917 12.8493 10.8499 12.5648 10.571C12.4906 10.4978 12.4032 10.4394 12.3072 10.399L12.2892 10.391L12.2623 10.381C12.1729 10.349 12.0786 10.3328 11.9837 10.333ZM15.7276 6.16697C15.0888 6.16539 14.5526 6.64873 14.4871 7.28522C14.4216 7.92172 14.8481 8.50444 15.4738 8.63339C16.0995 8.76235 16.7211 8.39562 16.9118 7.78494C17.1025 7.17425 16.8004 6.51814 16.2128 6.26698H16.2028C16.0525 6.20267 15.8911 6.16869 15.7276 6.16697ZM4.49593 9.49996C4.03663 9.49996 3.66429 9.12701 3.66429 8.66696C3.66429 8.20691 4.03663 7.83397 4.49593 7.83397C4.95523 7.83397 5.32757 8.20691 5.32757 8.66696C5.32702 9.12679 4.95501 9.49941 4.49593 9.49996ZM3.24797 6.99997C2.55873 6.99997 2 6.44033 2 5.74998C2 5.05963 2.55873 4.49999 3.24797 4.49999C3.9372 4.49999 4.49593 5.05963 4.49593 5.74998C4.49483 6.43988 3.93674 6.99887 3.24797 6.99997ZM8.23983 5.33298C7.55059 5.33298 6.99186 4.77334 6.99186 4.08299C6.99186 3.39264 7.55059 2.833 8.23983 2.833C8.92906 2.833 9.48779 3.39264 9.48779 4.08299C9.48779 4.7735 8.92922 5.33343 8.23983 5.33398V5.33298ZM5.32857 3.66699C4.8694 3.66699 4.49711 3.29425 4.49693 2.83433C4.49675 2.37441 4.86873 2.00137 5.32791 2.001C5.78708 2.00063 6.15967 2.37308 6.16022 2.833C6.16022 3.29321 5.78804 3.66644 5.32857 3.66699Z"
                    fill="currentColor"
                  ></path>
                </svg>

                <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                  {transaction.quantity} Meals
                </h1>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <h3 className="text-xl font-medium leading-6 text-gray-800 capitalize dark:text-white mt-6">
              Meet Directions :{" "}
              <a
                className="underline"
                href={
                  userType === "donor"
                    ? transaction.pair.donor_path
                    : transaction.pair.distributor_path
                }
              >
                {transaction.pair.meet_location.address}
              </a>
            </h3>
            <iframe
              className="border-0 w-full h-[40vh] mt-4 mb-6"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/directions?origin=${
                userType === "donor"
                  ? transaction.location.coordinates[0]
                  : transaction.pair.distributor_location.coordinates[0]
              },${
                userType === "donor"
                  ? transaction.location.coordinates[1]
                  : transaction.pair.distributor_location.coordinates[1]
              }&destination=${transaction.pair.meet_location.coordinates[0]},${
                transaction.pair.meet_location.coordinates[1]
              }&key=AIzaSyBbcFeq42Ad9aqnlZuQdkNahM3YmyC2Z6Y&zoom=10`}
            />
            <hr className="border-gray-200 dark:border-gray-700" />

            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white mt-6">
              Donor Information
            </h3>
            <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2">
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

                <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white truncate">
                  {transaction.donor_name}
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
                  {transaction.donor_phone}
                </h1>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white mt-6">
              Distributor Information
            </h3>
            <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2">
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

                <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white truncate">
                  {transaction.pair.distributor_name}
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
                  {transaction.pair.distributor_phone}
                </h1>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"
                  fill="currentColor"
                ></path>
              </svg>

              <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white truncate">
                {moment(transaction.timestamp, moment.ISO_8601).format("lll")}
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
              <h1 className="mx-2 text-lg text-gray-700 dark:text-white truncate">
                {transaction.location.address}
              </h1>
            </div>

            <div className="flex items-center text-gray-700 dark:text-gray-200 px-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9837 21.9999C6.47237 21.9938 2.00605 17.5203 2 11.9999C2.39311 12.1112 2.79955 12.168 3.20803 12.1689C4.55933 12.1789 5.82888 11.5217 6.6025 10.412C7.29413 9.41154 7.44027 8.13091 6.99186 6.99997C7.27858 7.05119 7.5692 7.07729 7.86045 7.07797C9.1552 7.08764 10.3841 6.50698 11.2 5.49998C11.9984 4.52274 12.3106 3.2352 12.0486 2C17.5625 2.01795 22.0178 6.50963 21.9999 12.0324C21.982 17.5553 17.4976 22.0178 11.9837 21.9999ZM12.7455 18.5679C12.8991 18.634 13.0645 18.6681 13.2317 18.6679C13.7362 18.6674 14.1909 18.363 14.3842 17.8961C14.5775 17.4293 14.4714 16.8919 14.1152 16.5339C13.8805 16.2998 13.5629 16.1683 13.2317 16.1679C12.6392 16.1693 12.1294 16.5877 12.0115 17.1693C11.8937 17.7509 12.2004 18.3353 12.7455 18.5679ZM6.91199 16.8749C7.11205 16.9578 7.32647 17.0003 7.54296 16.9999C8.21842 16.9997 8.82678 16.5907 9.08272 15.9646C9.33866 15.3385 9.19143 14.6195 8.71006 14.1449C8.3989 13.838 7.97969 13.6659 7.54296 13.6659C6.62442 13.667 5.88022 14.4129 5.87967 15.3329C5.87984 16.0017 6.2781 16.606 6.89202 16.8689H6.89702H6.908L6.91199 16.8749ZM16.3276 14.3679C16.9987 14.6502 17.775 14.4627 18.2439 13.9051C18.7127 13.3475 18.7652 12.5493 18.3733 11.9349C18.2506 11.7436 18.0902 11.5793 17.9021 11.4519C17.3853 11.1024 16.7167 11.0716 16.17 11.3721C15.6233 11.6726 15.2902 12.254 15.307 12.8784C15.3238 13.5028 15.6877 14.0654 16.2498 14.3359H16.2378L16.2677 14.3489L16.2877 14.3569H16.2817C16.296 14.3615 16.31 14.3669 16.3236 14.3729L16.3276 14.3679ZM11.9837 10.333C11.5855 10.3323 11.2426 10.6141 11.1655 11.0054C11.0883 11.3967 11.2986 11.7879 11.6672 11.9389C12.0357 12.0899 12.4594 11.9583 12.6782 11.625C12.8969 11.2917 12.8493 10.8499 12.5648 10.571C12.4906 10.4978 12.4032 10.4394 12.3072 10.399L12.2892 10.391L12.2623 10.381C12.1729 10.349 12.0786 10.3328 11.9837 10.333ZM15.7276 6.16697C15.0888 6.16539 14.5526 6.64873 14.4871 7.28522C14.4216 7.92172 14.8481 8.50444 15.4738 8.63339C16.0995 8.76235 16.7211 8.39562 16.9118 7.78494C17.1025 7.17425 16.8004 6.51814 16.2128 6.26698H16.2028C16.0525 6.20267 15.8911 6.16869 15.7276 6.16697ZM4.49593 9.49996C4.03663 9.49996 3.66429 9.12701 3.66429 8.66696C3.66429 8.20691 4.03663 7.83397 4.49593 7.83397C4.95523 7.83397 5.32757 8.20691 5.32757 8.66696C5.32702 9.12679 4.95501 9.49941 4.49593 9.49996ZM3.24797 6.99997C2.55873 6.99997 2 6.44033 2 5.74998C2 5.05963 2.55873 4.49999 3.24797 4.49999C3.9372 4.49999 4.49593 5.05963 4.49593 5.74998C4.49483 6.43988 3.93674 6.99887 3.24797 6.99997ZM8.23983 5.33298C7.55059 5.33298 6.99186 4.77334 6.99186 4.08299C6.99186 3.39264 7.55059 2.833 8.23983 2.833C8.92906 2.833 9.48779 3.39264 9.48779 4.08299C9.48779 4.7735 8.92922 5.33343 8.23983 5.33398V5.33298ZM5.32857 3.66699C4.8694 3.66699 4.49711 3.29425 4.49693 2.83433C4.49675 2.37441 4.86873 2.00137 5.32791 2.001C5.78708 2.00063 6.15967 2.37308 6.16022 2.833C6.16022 3.29321 5.78804 3.66644 5.32857 3.66699Z"
                  fill="currentColor"
                ></path>
              </svg>

              <h1 className="mx-2 text-lg text-gray-700 capitalize dark:text-white">
                {transaction.quantity} Meals
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
              <h1 className="w-full mx-2 text-lg text-gray-700 capitalize dark:text-white truncate">
                {transaction.travelCapacity} Kilometres
              </h1>
            </div>
          </div>
        )}

        {transaction.current_state === "Not Paired" && (
          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="px-3 py-2 text-lg font-medium text-blue-600 dark:text-blue-300 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Delete Package
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Transactions;
