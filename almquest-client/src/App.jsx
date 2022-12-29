import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
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

const App = () => {
  const pageRefs = useRef({});
  const GetTransaction = () => {
    const { transactionId } = useParams();
    return <Transactions id={transactionId} userType="donor" />;
  };

  return (
    <>
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
