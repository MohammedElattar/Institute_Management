import React from "react";
import ReactDOM from "react-dom/client";
import "./config";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
