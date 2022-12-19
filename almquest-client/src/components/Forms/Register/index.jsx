import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegForm from "./RegForm";

const Register = () => {
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
    const tempUser = JSON.parse(localStorage.getItem("temp_user"));
    const regUser = JSON.parse(localStorage.getItem("reg_user"));
    if (regUser) navigate("/", { replace: true });
    if (tempUser) {
      const { name, email, picture } = tempUser;
      setPersonalDetails({ ...personalDetails, name, email, picture });
    } else {
      navigate("/", { replace: true });
    }
  }, []);

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
      const res = await axios.post(
        "http://localhost:3000/api/donor/register",
        donor
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const submitDistributor = async (distributor) => {
    try {
      console.log(distributor);
      const res = await axios.post(
        "http://localhost:3000/api/distributor/register",
        distributor
      );
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
    const checkReg = await axios.post(
      "http://localhost:3000/api/checkExist",
      body
    );
    const tempUser = JSON.parse(localStorage.getItem("temp_user"));
    tempUser.userType = checkReg.data.userType;
    tempUser.id = checkReg.data.id;
    localStorage.setItem("reg_user", JSON.stringify(tempUser));
    localStorage.removeItem("temp_user");
    navigate("/", { replace: true });
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
