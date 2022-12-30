import axios from "axios";
import Pusher from "pusher-js";
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

Pusher.logToConsole = true;

var pusher = new Pusher("e8e48f668ab490fa03e0", {
  cluster: "ap2",
});

const channel = pusher.subscribe("almquest-channel");

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

  const [notifs, setNotifs] = useState([]);
  const [unseen, setUnseen] = useState(0);

  useEffect(() => {
    console.log(user);
    if (user.email !== "") localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user, isLoggedIn]);

  useEffect(() => {
    if (user.id !== "") bindToChannel(user.id);
    else channel.unbind();
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
      }
      return {
        isRegistered,
        name: res.data.name ? res.data.name : "",
      };
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
        const { isRegistered, name } = await checkUserExist(res.data.email);
        setLoggedIn(true);
        if (!isRegistered) {
          displayAlert(
            "warning",
            `Welcome ${res.data.name.split(" ")[0]}!`,
            "Looks like you are not registered. Go ahead and join us in our journey!"
          );
          navigate("/register");
        } else {
          displayAlert(
            "success",
            `Welcome Back ${name.split(" ")[0]}!`,
            "Congratulations! Successfully logged you in!"
          );
        }
      } catch (err) {
        alert(err.message);
      }
    },
  });

  const logout = () => {
    setUser(defaultUser);
    setLoggedIn(false);
    navigate("/", { replace: true });
    displayAlert("info", `Till we meet again!`, "Successfully logged you out!");
  };

  const getNotifications = async () => {
    try {
      const { id, userType } = user;
      const res = await axios.get(`/api/${userType}/${id}/getNotifs`);
      console.log(res.data);
      setNotifs(res.data.notifs.slice(0).reverse());
      setUnseen(res.data.unseen_count);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSeen = async () => {
    try {
      const { id, userType } = user;
      const res = await axios.post(`/api/${userType}/${id}/notifSeen`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const bindToChannel = (id) => {
    channel.bind(id, function (data) {
      setTimeout(() => {
        getNotifications();
        displayAlert(
          "notif",
          "",
          data.message,
          data.photo || user.picture,
          data.pid
        );
      }, 4000);
      console.log(data.message);
    });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        notifs,
        unseen,
        setUser,
        checkUserExist,
        login,
        logout,
        getNotifications,
        updateSeen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
