import React from "react";
import { useState, useEffect } from "react";
import ViewProfile from "./ViewProfile";
import UpdateForm from "./UpdateForm";
import axios from "axios";
import { useUserContext } from "../../contexts/UserContext";
import { Ripple } from "react-preloaders2";
import { useThemeContext } from "../../contexts/ThemeContext";

const ProfileCard = () => {
  const { darkMode } = useThemeContext();
  const { user, setUser } = useUserContext();
  const [isEditing, setEditing] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    picture: "",
    name: "",
    email: "",
    phone: "",
    location: {},
  });

  const [donor, setDonor] = useState({
    donorType: "",
    distanceRange: "",
    lifetimeDonation: "",
  });

  const [distributor, setDistributor] = useState({
    distanceRange: "",
    maxCapacity: "",
    isActive: "",
    totalPackagesDistributed: "",
  });

  useEffect(() => {
    console.log(personalDetails);
    console.log(donor);
    console.log(distributor);
  }, [personalDetails, donor, distributor]);

  const getProfile = async () => {
    try {
      if (user && user.isRegistered) {
        const { id, userType } = user;
        const res = await axios.get(`/api/${userType}/${id}`);
        console.log(res.data.data);
        const { picture, name, email, location, phone } = res.data.data;
        setUser((prev) => ({ ...prev, name: name }));
        setPersonalDetails({
          name,
          email,
          picture: `${picture.slice(0, picture.length - 4)}256-c`,
          location,
          phone,
        });
        if (userType === "donor") {
          const { distanceRange, donorType, lifetimeDonation } = res.data.data;
          setDonor({ distanceRange, donorType, lifetimeDonation });
        }
        if (userType === "distributor") {
          const {
            distanceRange,
            maxCapacity,
            isActive,
            totalPackagesDistributed,
          } = res.data.data;
          setDistributor({
            maxCapacity,
            distanceRange,
            isActive,
            totalPackagesDistributed,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const toggleEditForm = () => {
    setEditing((prev) => !prev);
  };

  return (
    <>
      <div className="rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
        <div className="flex justify-center -mt-20 md:mx-12 md:justify-end">
          <img
            className="object-cover w-32 h-32 border-4 border-amber-500 rounded-full dark:border-amber-400"
            alt="Testimonial avatar"
            src={personalDetails.picture}
          />
        </div>
        <div className="w-full mt-4 md:mt-0 mb-4">
          {!isEditing ? (
            <ViewProfile
              toggleEditForm={toggleEditForm}
              personalDetails={personalDetails}
              donor={donor}
              distributor={distributor}
            />
          ) : (
            <UpdateForm
              toggleEditForm={toggleEditForm}
              getProfile={getProfile}
              personalDetails={personalDetails}
              donor={donor}
              distributor={distributor}
            />
          )}
        </div>
      </div>
      <Ripple
        customLoading={personalDetails.name === ""}
        time={1000}
        background={!darkMode ? "rgb(255, 255, 255)" : "rgb(17, 24, 39)"}
        color={darkMode ? "rgb(255, 255, 255)" : "rgb(17, 24, 39)"}
      />
    </>
  );
};

export default ProfileCard;
