import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import NotificationItem from "./NotificationItem";
import axios from "axios";

const NotifTray = ({ id, userType }) => {
  const [isOpen, setOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [unseen, setUnseen] = useState(0);
  const getNotifications = async () => {
    try {
      const res = await axios.get(`/api/${userType}/${id}/getNotifs`);
      console.log(res.data);
      setNotifs(res.data.notifs.slice(0).reverse());
      setUnseen(res.data.unseen_count);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNotifications();
  }, [isOpen]);
  const toggle = () => {
    if (isOpen) setOpen(false);
    else handleOpen();
  };

  const updateSeen = async () => {
    try {
      const res = await axios.post(`/api/${userType}/${id}/notifSeen`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = async () => {
    setOpen(true);
    if (unseen !== 0) {
      await updateSeen();
    }
    setHasSeen(true);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="mx-4 w-8 h-8 relative inline-block">
        <button
          onClick={toggle}
          className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:bg-gray-800 focus:outline-none"
        >
          {unseen === 0 ? (
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.792 18 7.036 18 10.5V16L20 17V19ZM12 5.75C10.7797 5.6712 9.60278 6.21728 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16.0528 9.33639 15.7474 8.18458 15.125 7.2C14.3972 6.21728 13.2203 5.6712 12 5.75Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H13C12.3479 2.86394 11.9967 3.91762 12 5C12 5.25138 12.0187 5.50241 12.056 5.751H12C10.7799 5.67197 9.60301 6.21765 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16 10.289 15.993 10.086 15.979 9.9C16.6405 10.0366 17.3226 10.039 17.985 9.907C17.996 10.118 18 10.319 18 10.507V16L20 17V19ZM17 8C16.3958 8.00073 15.8055 7.81839 15.307 7.477C14.1288 6.67158 13.6811 5.14761 14.2365 3.8329C14.7919 2.5182 16.1966 1.77678 17.5954 2.06004C18.9942 2.34329 19.9998 3.5728 20 5C20 6.65685 18.6569 8 17 8Z"
                fill="currentColor"
              ></path>
            </svg>
          )}{" "}
        </button>
        {isOpen && notifs.length !== 0 && (
          <div
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="opacity-0 scale-90"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-100"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-90"
            className="absolute right-0 z-20 w-64 mt-6 overflow-hidden bg-gray-200 rounded-md shadow-lg sm:w-80 dark:bg-gray-900"
          >
            <div className="py-2">
              {notifs.map((notif, idx) => (
                <NotificationItem
                  key={notif._id}
                  notif={notif}
                  seen={idx + 1 > unseen}
                />
              ))}
            </div>
            <a
              href="#"
              className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
            >
              See all notifications
            </a>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default NotifTray;
