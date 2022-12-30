import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { useAlertContext } from "../../../contexts/AlertContext";

const ActiveToggle = ({ initialActive }) => {
  const [isActive, setActive] = useState(initialActive);
  const { user } = useUserContext();
  const { displayAlert } = useAlertContext();

  useEffect(() => {
    if (initialActive !== undefined) setActive(initialActive);
  }, [initialActive]);

  const handleChange = () => {
    const toggleActivity = async () => {
      try {
        const { id } = user;
        const res = await axios.post(`/api/distributor/toggle/${id}`);
        console.log(res);
        if (isActive === false)
          displayAlert(
            "success",
            "Wow! You are active now",
            "You will be visible to donors"
          );
        if (isActive === true)
          displayAlert(
            "info",
            "Looking forward to seeing you!",
            "You are inactive now and will not be visible to donors"
          );
        setActive((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    };
    toggleActivity();
  };
  return (
    <div className="flex flex-row-reverse mx-1">
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleChange}
          checked={initialActive === undefined ? false : isActive}
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-amber-500"></div>
        <span className="ml-3 text-sm text-gray-600  dark:text-gray-300 capitalize">
          Toggle Activity
        </span>
      </label>
    </div>
  );
};

export default ActiveToggle;
