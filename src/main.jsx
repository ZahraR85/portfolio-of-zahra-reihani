import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./components/style/Style.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-of-zahra-reihani">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
