import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ActivityToggler = ({ id, initialActive }) => {
  const [isActive, setActive] = useState(initialActive);

  useEffect(() => {
    if (initialActive !== undefined) setActive(initialActive);
  }, [initialActive]);

  const handleChange = () => {
    const toggleActivity = async () => {
      try {
        const res = await axios.post(`/api/distributor/toggle/${id}`);
        console.log(res);
        setActive((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    };
    toggleActivity();
  };
  return (
    <button
      type="none"
      className="rounded-full shadow-md max-w-full bg-gray-50 dark:bg-gray-800"
    >
      <div className="p-2 flex mx-4">
        <p className="mr-2 text-gray-500 dark:text-gray-400 text-center md:text-start">
          Activity Status:{" "}
        </p>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleChange}
            checked={initialActive === undefined ? false : isActive}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-500"></div>
        </label>
      </div>
    </button>
  );
};

export default ActivityToggler;
