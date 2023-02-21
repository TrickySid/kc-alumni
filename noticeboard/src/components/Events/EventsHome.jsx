import React from "react";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import EventsContent from "./EventsContent";
import "../../styles/Events/EventsHome.css";

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
            <EventsContent />
          </div>
        </div>
      </div>
    </>
  );
}
