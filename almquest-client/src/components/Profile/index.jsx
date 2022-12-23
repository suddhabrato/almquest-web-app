import React from "react";
import { useState, useEffect } from "react";
import ViewProfile from "./ViewProfile";
import UpdateForm from "./UpdateForm";
import axios from "axios";

const Profile = () => {
  const [userType, setUserType] = useState();
  const [isEditing, setEditing] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    picture: "",
    name: "",
    email: "",
    phone: "",
    location: {},
  });

  const [donor, setDonor] = useState({
    donorType: "Individual",
    distanceRange: "",
  });

  const [distributor, setDistributor] = useState({
    distanceRange: "",
    maxCapacity: "",
  });

  useEffect(() => {
    console.log(personalDetails);
    console.log(donor);
    console.log(distributor);
  }, [personalDetails, donor, distributor]);

  useEffect(() => {
    const tempUser = JSON.parse(localStorage.getItem("temp_user"));
    const regUser = JSON.parse(localStorage.getItem("reg_user"));
    if (tempUser) navigate("/register", { replace: true });
    if (regUser) {
      const getProfile = async () => {
        try {
          const { id, userType } = regUser;
          setUserType(userType);
          const res = await axios.get(`/api/${userType}/${id}`);
          const { picture, name, email, location, phone } = res.data.data;
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
            const { distanceRange, maxCapacity } = res.data.data;
            setDistributor({ maxCapacity, distanceRange });
          }
        } catch (err) {
          console.log(err);
        }
      };
      getProfile();
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  const toggleEditForm = () => {
    setEditing((prev) => !prev);
  };

  const handleChange = (evt, userType) => {
    const value = evt.target.value;
    if (["name", "email", "phone"].includes(evt.target.name)) {
      setPersonalDetails((prev) => ({
        ...prev,
        [evt.target.name]: value,
      }));
    } else {
      if (userType === "Donor") {
        setDonor((prev) => ({
          ...prev,
          [evt.target.name]: value,
        }));
      } else {
        setDistributor((prev) => ({
          ...prev,
          [evt.target.name]: value,
        }));
      }
    }
  };

  const submitDonor = async (donor) => {
    try {
      console.log(donor);
      const res = await axios.post("/api/donor/register", donor);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const submitDistributor = async (distributor) => {
    try {
      console.log(distributor);
      const res = await axios.post("/api/distributor/register", distributor);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (evt, userType) => {
    evt.preventDefault();
    if (userType === "Donor") {
      const body = {
        ...donor,
        ...personalDetails,
      };
      submitDonor(body);
    } else {
      const body = {
        ...distributor,
        ...personalDetails,
      };
      submitDistributor(body);
    }
    const body = { email: personalDetails.email };
    const checkReg = await axios.post("/api/checkExist", body);
    const tempUser = JSON.parse(localStorage.getItem("temp_user"));
    tempUser.userType = checkReg.data.userType;
    tempUser.id = checkReg.data.id;
    localStorage.setItem("reg_user", JSON.stringify(tempUser));
    localStorage.removeItem("temp_user");
    navigate("/", { replace: true });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen mt-16">
        <div className="rounded-lg shadow-lg border-gray-100 dark:border-gray-700 border-2 flex-col items-center h-full w-full max-w-4xl p-8 mx-4 lg:px-12 lg:w-3/5">
          <div className="flex justify-center -mt-20 md:mx-12 md:justify-end">
            <img
              className="object-cover w-32 h-32 border-4 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={personalDetails.picture}
            />
          </div>
          <div className="w-full mt-4 md:mt-0">
            {!isEditing ? (
              <ViewProfile
                toggleEditForm={toggleEditForm}
                personalDetails={personalDetails}
                userType={userType}
                donor={donor}
                distributor={distributor}
              />
            ) : (
              <UpdateForm />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
