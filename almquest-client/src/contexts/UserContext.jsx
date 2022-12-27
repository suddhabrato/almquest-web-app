import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const userContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("reg_user")) ||
      JSON.parse(localStorage.getItem("temp_user"))
  );
};

export const useUserContext = () => userContext(userContext);
