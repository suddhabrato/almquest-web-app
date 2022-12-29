import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    showing: false,
    title: "",
    msg: "",
    type: "",
    img: "",
    pid: "",
  });

  const displayAlert = (type, title, msg, img, pid) => {
    setAlert({ showing: true, msg, type, img, title, pid });
    setTimeout(() => {
      setAlert({
        showing: false,
        msg: "",
        type: "",
        img: "",
        title: "",
        pid: "",
      });
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ alert, displayAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
