import React from "react";
import { Link, useLocation } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
import { useState, useEffect } from "react";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { useUserContext } from "../../../contexts/UserContext";
import ActiveToggle from "./ActiveToggle";
import axios from "axios";

const Avatar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { logout, user } = useUserContext();
  const [isOpen, setOpen] = useState(false);
  const [initialActive, setInitialActive] = useState();
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (user.id !== "" && user.userType === "distributor") {
      const fetchActive = async () => {
        const res = await axios.get(`/api/distributor/${user.id}`);
        const { isActive } = res.data.data;
        console.log(isActive);
        setInitialActive(isActive);
      };
      fetchActive();
    }
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="relative inline-block">
        <button
          onClick={toggle}
          type="button"
          className="flex items-center focus:outline-none"
          aria-label="toggle profile dropdown"
        >
          <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
            <img
              referrerPolicy="no-referrer"
              src={user.picture}
              className="object-cover w-full h-full"
              alt="avatar"
            />
          </div>
        </button>
        {isOpen && (
          <div
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="opacity-0 scale-90"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-100"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-90"
            className="absolute right-0 z-20 w-48 py-2 mt-2 lg:mt-6 bg-white rounded-md shadow-xl dark:bg-gray-800"
          >
            {user.isRegistered ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">view profile</span>
                </Link>
                <hr className="border-gray-200 dark:border-gray-700 mx-2" />

                <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <button
                    id="theme-toggle"
                    type="button"
                    onClick={toggleDarkMode}
                    className="flex"
                  >
                    {!darkMode ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mx-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mx-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        ></path>
                      </svg>
                    )}
                    <span className="mx-1">Change Theme</span>
                  </button>
                </a>
                <hr className="border-gray-200 dark:border-gray-700 mx-2" />

                {user.userType === "donor" && (
                  <a
                    href="#"
                    className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mx-1"
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

                    <span className="mx-1">Donate Now</span>
                  </a>
                )}
                {user.userType === "distributor" && (
                  <a className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <ActiveToggle initialActive={initialActive} />
                  </a>
                )}
                <hr className="border-gray-200 dark:border-gray-700 mx-2" />
                <Link
                  to="/profile"
                  className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 20L4 16L9 12V15H22V17H9V20ZM15 12V9H2V7H15V4L20 8L15 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">View Transactions</span>
                </Link>
              </>
            ) : (
              <>
                <a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <button
                    id="theme-toggle"
                    type="button"
                    onClick={toggleDarkMode}
                    className="flex"
                  >
                    {!darkMode ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mx-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mx-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        ></path>
                      </svg>
                    )}
                    <span className="mx-1">Change Theme</span>
                  </button>
                </a>
                <hr className="border-gray-200 dark:border-gray-700 mx-2" />

                <Link
                  to="/register"
                  className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20H4C2.93052 20.032 2.03642 19.1933 2 18.124V5.875C2.03641 4.80581 2.93068 3.96743 4 4H20C21.0693 3.96743 21.9636 4.80581 22 5.875V18.125C21.963 19.1939 21.0691 20.032 20 20ZM4 6V17.989L20 18V6.011L4 6ZM13.43 16H6C6.07353 15.1721 6.46534 14.4049 7.093 13.86C7.79183 13.1667 8.73081 12.7692 9.715 12.75C10.6992 12.7692 11.6382 13.1667 12.337 13.86C12.9645 14.4051 13.3563 15.1721 13.43 16ZM18 15H15V13H18V15ZM9.715 12C9.17907 12.0186 8.65947 11.8139 8.28029 11.4347C7.9011 11.0555 7.69638 10.5359 7.715 10C7.69668 9.46416 7.9015 8.94474 8.28062 8.56562C8.65974 8.1865 9.17916 7.98168 9.715 8C10.2508 7.98168 10.7703 8.1865 11.1494 8.56562C11.5285 8.94474 11.7333 9.46416 11.715 10C11.7336 10.5359 11.5289 11.0555 11.1497 11.4347C10.7705 11.8139 10.2509 12.0186 9.715 12ZM18 11H14V9H18V11Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">Register</span>
                </Link>
              </>
            )}
            <hr className="border-gray-200 dark:border-gray-700 mx-2" />
            <a
              onClick={logout}
              className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="mx-1">Sign Out</span>
            </a>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Avatar;
