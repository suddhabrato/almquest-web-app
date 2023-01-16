import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import { AlertContextProvider } from "./contexts/AlertContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { UserContextProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://almquest-server-e0jb.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="31211872217-l7030vqhkrmsahh0p8q7lrsc7h4u7vj7.apps.googleusercontent.com">
    <BrowserRouter>
      <ThemeContextProvider>
        <AlertContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </AlertContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
