import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegForm from "./RegForm";
import { useUserContext } from "../../../contexts/UserContext";
import { useAlertContext } from "../../../contexts/AlertContext";

const Register = () => {
  const { user, isLoggedIn, checkUserExist } = useUserContext();
  const { displayAlert } = useAlertContext();
  const navigate = useNavigate();
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "in" },
    fields: ["geometry", "name"],
  };
  //autocomplete places api util
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const loc = {
        address: place.name,
        coordinates: [
          place.geometry.location.lat(),
          place.geometry.location.lng(),
        ],
      };
      setPersonalDetails((prev) => ({
        ...prev,
        location: loc,
      }));
    });
  }, []);

  useEffect(() => {
    if (user.isRegistered) {
      displayAlert(
        "info",
        "Already a member of the family",
        "You are already registered as a " + user.userType
      );
      navigate("/", { replace: true });
    }
    if (isLoggedIn) {
      const { name, email, picture } = user;
      setPersonalDetails({ ...personalDetails, name, email, picture });
    } else {
      displayAlert(
        "error",
        "Hey! We don't recognize you",
        "Please login to join AlmQuest!"
      );
      navigate("/", { replace: true });
    }
  }, [user]);

  const [personalDetails, setPersonalDetails] = useState({
    picture: "",
    name: "",
    email: "",
    phone: "",
  });

  const [donor, setDonor] = useState({
    donorType: "Individual",
    distanceRange: "",
  });

  const [distributor, setDistributor] = useState({
    distanceRange: "",
    maxCapacity: "",
  });

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
      await submitDonor(body);
    } else {
      const body = {
        ...distributor,
        ...personalDetails,
      };
      await submitDistributor(body);
    }
    const { name } = await checkUserExist(personalDetails.email);
    setTimeout(() => {
      displayAlert(
        "success",
        `Successfully registered as a ${userType}!`,
        "Welcome to the AlmQuest Family " + name.split(" ")[0]
      );
      navigate("/", { replace: true });
    }, 1000);
  };

  return (
    <RegForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      personalDetails={personalDetails}
      inputRef={inputRef}
      donor={donor}
      distributor={distributor}
    />
  );
};

export default Register;
