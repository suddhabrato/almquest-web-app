import React from "react";
import Pusher from "pusher-js";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegisterForm from "./components/Forms/Register";
import { useEffect } from "react";
import Profile from "./components/Profile";
import Transactions from "./components/Transactions";

import PersonaInfo from "./components/Information/PersonaInfo";

const App = () => {
  const pusher = new Pusher("b369bdc486176cddddfd", {
    cluster: "ap2",
  });

  const channel = pusher.subscribe("almquest-channel");

  channel.bind("63a167af6915ec54e5cb3f19", function (data) {
    console.log(data);
  });

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode
      ? (document.body.classList.add("dark"),
        document.body.classList.add("bg-gray-900"),
        document.body.classList.remove("bg-white"))
      : (document.body.classList.remove("dark"),
        document.body.classList.add("bg-white"),
        document.body.classList.remove("bg-gray-900"));
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transaction" element={<Transactions />} />
        <Route path="/personainfo" element={<PersonaInfo/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
