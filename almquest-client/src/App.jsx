import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegisterForm from "./components/Forms/Register";
import { useEffect } from "react";

const App = () => {
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
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div className="bg-white dark:bg-gray-900">
        <BrowserRouter>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
