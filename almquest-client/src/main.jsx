import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="31211872217-l7030vqhkrmsahh0p8q7lrsc7h4u7vj7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
