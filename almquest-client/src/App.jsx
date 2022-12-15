import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegisterForm from "./components/Forms/RegisterForm";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <div className="bg-white dark:bg-gray-900">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
