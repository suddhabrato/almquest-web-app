import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegisterForm from "./components/Forms/Register";
import Profile from "./components/Profile";
import Transactions from "./components/Transactions";
import PersonaInfo from "./components/Information/PersonaInfo";
import Alert from "./components/Alerts";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Ripple } from "react-preloaders2";
import { useThemeContext } from "./contexts/ThemeContext";
const App = () => {
  const [loading, setLoading] = useState(true);
  const { darkMode } = useThemeContext();
  const pageRefs = useRef({});
  const GetTransaction = () => {
    const { transactionId } = useParams();
    return <Transactions id={transactionId} userType="donor" />;
  };

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname !== "/profile" &&
      location.pathname.indexOf("transaction") === -1
    ) {
      setLoading((prev) => true);
      setTimeout(() => {
        setLoading((prev) => false);
      }, 500);
    }
  }, [location]);

  return (
    <>
      <Ripple
        background={!darkMode ? "rgb(255, 255, 255)" : "rgb(17, 24, 39)"}
        color={darkMode ? "rgb(255, 255, 255)" : "rgb(17, 24, 39)"}
        customLoading={loading}
      />
      <Navbar pageRefs={pageRefs} />
      <Alert />
      <Routes>
        <Route path="/" element={<Home pageRefs={pageRefs} />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/transaction/:transactionId"
          element={<GetTransaction />}
        />
        <Route path="/personainfo" element={<PersonaInfo />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
