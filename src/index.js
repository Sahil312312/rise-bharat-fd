import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContext } from "./store/AuthContext";

export const baseUrl = "https://rise-bharat.onrender.com/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <App />
  </AuthContext>
);
