import React from "react";

const NotificationItem = () => {
  const notif = {
    _id: "63a69de3cf5d0a51a41a55d9",
    user_id: "63a32c408cb59257713fa6dc",
    user_type: "Donor",
    message: "You have been Paired",
    packageId: "63a69de12d697bc12a0a06ce",
    name: "Suddhabrato Ghosh",
    photo:
      "https://lh3.googleusercontent.com/a/AEdFTp7FcCWzo5WIgQG7-HwLvDSV5QqDK6EDMikJfvQqqg",
    desc: "You have been paired",
    timestamp: "1671863779376",
    meet_location: {
      coordinates: [22.7595826, 88.3753067],
      address: "",
    },
    path: "https://www.google.com/maps/dir/22.7593618,+88.3746275/22.7595826,+88.3753067/am=t",
  };
  return (
    <a
      href="#"
      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
    >
      <img
        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <p className="mx-2 text-sm text-gray-600 dark:text-white">
        <span className="font-bold" href="#">
          Sara Salah
        </span>{" "}
        replied on the{" "}
        <span className="text-blue-500 hover:underline" href="#">
          Upload Image
        </span>{" "}
        artical . 2m
      </p>
    </a>
  );
};

export default NotificationItem;
