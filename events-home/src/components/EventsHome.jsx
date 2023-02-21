import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AddEvent from "./AddEvent";
import "../styles/EventsHome.css";

export default function EventsHome() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Main />
          </div>
        </div>
      </div>
      <AddEvent />
    </>
  );
}
