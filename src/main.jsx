import React from "react"; // Add this at the top
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import "./components/style/Style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-of-zahra-reihani">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
