import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegisterForm from "./components/Forms/Register";
import { useEffect } from "react";
import Profile from "./components/Profile";
import Transactions from "./components/Transactions";
import PersonaInfo from "./components/Information/PersonaInfo";
import Alert from "./components/Alerts";
import { useThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const GetTransaction = () => {
    const { transactionId } = useParams();
    return <Transactions id={transactionId} userType="donor" />;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
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
    </BrowserRouter>
  );
};

export default App;
