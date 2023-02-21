import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import AddNotice from "./components/Noticeboard/AddNotice";
import EventsHome from "./components/Events/EventsHome";
import AddEvent from "./components/Events/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "addNotice",
    element: (
      <>
        <Navbar />
        <AddNotice />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "events",
    element: (
      <>
        <EventsHome />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "addEvent",
    element: (
      <>
        <Navbar />
        <AddEvent />
        <ToastContainer />
      </>
    ),
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
