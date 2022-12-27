import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import UpdateForm from "./UpdateForm";
import axios from "axios";

const ProfileCard = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState();
  const [id, setId] = useState();
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
  });

  const [distributor, setDistributor] = useState({
    distanceRange: "",
    maxCapacity: "",
    isActive: "",
  });

  useEffect(() => {
    console.log(personalDetails);
    console.log(donor);
    console.log(distributor);
  }, [personalDetails, donor, distributor]);

  const getProfile = async () => {
    try {
      const regUser = await JSON.parse(localStorage.getItem("reg_user"));
      if (regUser) {
        const { id, userType } = regUser;
        setUserType(userType);
        setId(id);
        const res = await axios.get(`/api/${userType}/${id}`);
        const { picture, name, email, location, phone } = res.data.data;
        regUser.name = name;
        localStorage.setItem("reg_user", JSON.stringify(regUser));
        setPersonalDetails({
          name,
          email,
          picture,
          location,
          phone,
        });
        if (userType === "donor") {
          const { distanceRange, donorType } = res.data.data;
          setDonor({ distanceRange, donorType });
        }
        if (userType === "distributor") {
          const { distanceRange, maxCapacity, isActive } = res.data.data;
          setDistributor({ maxCapacity, distanceRange, isActive });
        }
      } else {
        navigate("/", { replace: true });
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
    <div className="rounded-xl shadow-lg border-gray-100 dark:border-gray-700 border-1 flex-col items-center h-full w-full max-w-4xl p-8 lg:px-12 mx-auto">
      <div className="flex justify-center -mt-20 md:mx-12 md:justify-end">
        <img
          className="object-cover w-32 h-32 border-4 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={personalDetails.picture}
        />
      </div>
      <div className="w-full mt-4 md:mt-0 mb-4">
        {!isEditing ? (
          <ViewProfile
            toggleEditForm={toggleEditForm}
            personalDetails={personalDetails}
            userType={userType}
            id={id}
            donor={donor}
            distributor={distributor}
          />
        ) : (
          <UpdateForm
            toggleEditForm={toggleEditForm}
            getProfile={getProfile}
            personalDetails={personalDetails}
            userType={userType}
            donor={donor}
            id={id}
            distributor={distributor}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
