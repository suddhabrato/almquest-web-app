import React from "react";
import Pusher from "pusher-js";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import NotifTray from "../Notifications/NotifTray";
import Avatar from "./Avatar";
import { useUserContext } from "../../../contexts/UserContext";

const Navbar = () => {
  const { login, isLoggedIn, user } = useUserContext();
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow dark:bg-gray-900 z-30">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700 flex items-center">
              <button
                onClick={toggle}
                type="button"
                className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                className="mx-4 lg:mx-0 text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
                AlmQuest
              </Link>
            </div>

            <div className="flex lg:hidden items-center">
              {!isLoggedIn ? (
                <div className="flex items-baseline -mx-2 sm:mt-0">
                  <Link
                    onClick={login}
                    className="px-3 py-1.5 text-sm font-semibold text-gray-700 dark:text-white transition-colors duration-300 transform border-2 rounded-md  hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sign In
                  </Link>
                </div>
              ) : (
                <div className="flex items-center">
                  {user.isRegistered && <NotifTray />}
                  <Avatar />
                </div>
              )}
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } h-[100vh] lg:h-auto absolute z-20 inset-x-0 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Features
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About Us
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Team
              </a>
              <Link
                to="/contact"
                onClick={toggle}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact us
              </Link>
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
              <div className="hidden lg:flex">
                {!isLoggedIn ? (
                  <div className="flex items-center mx-2 sm:mt-0">
                    <Link
                      onClick={login}
                      className="px-3 py-1.5 text-sm font-semibold text-gray-700 dark:text-white transition-colors duration-300 transform border-2 rounded-md  hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign In
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center">
                    {user.isRegistered && <NotifTray />}
                    <Avatar />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
