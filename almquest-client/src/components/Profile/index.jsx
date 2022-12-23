import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import ViewProfile from "./ViewProfile";
import UpdateForm from "./UpdateForm";
import DonatePackageCTA from "./DonatePackageCTA";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState();

  useEffect(() => {
    const regUser = JSON.parse(localStorage.getItem("reg_user"));
    console.log(regUser);
    if (regUser) {
      setUserType(regUser.userType);
    } else navigate("/", { replace: true });
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex-col justify-center items-center min-h-screen mx-4 mt-16 mb-8">
          <ProfileCard />
          {userType === "donor" && <DonatePackageCTA />}
        </div>
      </section>
    </>
  );
};

export default Profile;
