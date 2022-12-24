import React from "react";
import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "in%s",
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

const NotificationItem = ({ notif }) => {
  return (
    <div
      href="#"
      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
    >
      <img
        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
        src={notif.photo}
        alt="avatar"
      />
      <p className="mx-2 text-sm text-gray-600 dark:text-white">
        {notif.status === "Paired" ? (
          <>
            <span className="font-bold" href="#">
              Hurray!
            </span>
            {notif.user_type === "Donor"
              ? " We have found a distributor for your package! "
              : " We have assigned you to a donor! "}
          </>
        ) : (
          <>
            <span className="font-bold" href="#">
              Oops!
            </span>
            {" Looks like there are no distributors available near you. "}
          </>
        )}
        <span className="font-light opacity-90 mx-1">
          {moment(notif.timestamp, moment.ISO_8601).fromNow()}
        </span>
      </p>
    </div>
  );
};

export default NotificationItem;
