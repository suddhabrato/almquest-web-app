import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAlertContext } from "./AlertContext";

const defaultUser = {
  email: "",
  id: "",
  name: "",
  isRegistered: false,
  picture: "",
  userType: "",
};

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { displayAlert } = useAlertContext();
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user")) ? true : false
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || defaultUser
  );

  useEffect(() => {
    console.log(user);
    if (user.email !== "") localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user, isLoggedIn]);

  const checkUserExist = async (email) => {
    try {
      const body = { email: email };
      const res = await axios.post("/api/checkExist", body);
      const { isRegistered } = res.data;
      setUser((prev) => ({ ...prev, isRegistered: isRegistered }));
      if (isRegistered) {
        const { id, userType, name, picture } = res.data;
        setUser((prev) => ({
          ...prev,
          id: id,
          userType: userType,
          name: name,
          picture: picture,
        }));
        displayAlert(
          "success",
          `Welcome Back ${name.split(" ")[0]}!`,
          "Congratulations! Successfully logged you in!"
        );
      }
      setLoggedIn(true);
      return isRegistered;
    } catch (err) {
      console.log(err);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        setUser((prev) => ({
          ...prev,
          picture: res.data.picture,
          email: res.data.email,
          name: res.data.name,
        }));
        const isRegistered = await checkUserExist(res.data.email);
        if (!isRegistered) {
          displayAlert(
            "warning",
            `Welcome ${res.data.name.split(" ")[0]}!`,
            "Looks like you are not registered. Go ahead and join us in our journey!"
          );
          navigate("/register");
        }
      } catch (err) {
        alert(err.message);
      }
    },
  });

  const logout = () => {
    setUser(defaultUser);
    setLoggedIn(false);
    displayAlert("info", `Till we meet again!`, "Successfully logged you out!");
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setLoggedIn, user, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
