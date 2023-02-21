import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <App />
    <ToastContainer />
  </>
);
