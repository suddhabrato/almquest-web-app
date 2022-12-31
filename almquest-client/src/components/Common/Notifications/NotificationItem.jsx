import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useUserContext } from "../../../contexts/UserContext";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "1s",
    ss: "%ds",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    w: "1w",
    ww: "%dw",
    M: "1m",
    MM: "%dm",
    y: "1y",
    yy: "%dy",
  },
});

const NotificationItem = ({ notif, seen }) => {
  const { user } = useUserContext();
  return (
    <Link to={`/transaction/${notif.packageId}`}>
      <div
        className={`${
          !seen && "bg-white dark:bg-gray-800"
        } flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700`}
      >
        <img
          className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
          src={notif.photo || user.picture}
          alt="avatar"
          referrerPolicy="no-referrer"
        />
        <p className="mx-2 text-sm text-gray-600 dark:text-white">
          {notif.state === "Paired" && (
            <>
              <span className="font-bold" href="#">
                Hurray!
              </span>
              {notif.user_type === "Donor"
                ? " We have found a distributor for your package! "
                : " We have assigned you to a donor! "}
            </>
          )}
          {notif.state === "Not Paired" && (
            <>
              <span className="font-bold" href="#">
                Oops!
              </span>
              {" Looks like there are no distributors available near you. "}
            </>
          )}
          {notif.state === "Received" && (
            <>
              <span className="font-bold" href="#">
                Yaay!
              </span>
              {" Your package(s) has been received by the distributor!"}
            </>
          )}
          {notif.state === "Distributed" && (
            <>
              <span className="font-bold" href="#">
                Woah!
              </span>
              {" Your package(s) have been successfully distributed!"}
            </>
          )}
          <span className="font-light opacity-90 mx-1">
            {moment(notif.timestamp, moment.ISO_8601).fromNow()}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default NotificationItem;
