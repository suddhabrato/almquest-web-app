import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import DonatePackageCTA from "./DonatePackageCTA";
import { useAlertContext } from "../../contexts/AlertContext";
import { useUserContext } from "../../contexts/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useUserContext();
  const { displayAlert } = useAlertContext();
  useEffect(() => {
    console.log(user);
    if (!isLoggedIn) {
      displayAlert(
        "error",
        "Hey! We don't recognize you",
        "Please login to join AlmQuest!"
      );
      return navigate("/");
    } else if (user.isRegistered === false) {
      displayAlert(
        "error",
        "We were unable to find your profile!",
        "Please register with us to create your profile now."
      );
      return navigate("/register");
    }
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex-col justify-center items-center min-h-screen mx-4 mt-16 mb-8">
          <ProfileCard />
          {user.userType === "donor" && <DonatePackageCTA />}
        </div>
      </section>
    </>
  );
};

export default Profile;
