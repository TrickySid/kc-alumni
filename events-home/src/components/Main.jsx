import React from "react";
import EventCards from "./EventCards";
import "../styles/Main.css";
import postEvent from "../components/images/plus-icon.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="row">
        <div className="col-11">
          <p className="events-header">Upcoming Events</p>
        </div>
        <div className="col-1">
          <img src={postEvent} alt="" className="add-event" />
        </div>
      </div>
      <EventCards />
    </div>
  );
}
