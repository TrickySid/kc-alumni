import React from "react";
import EventCards from "./EventCards";
import "../../styles/Events/EventsContent.css";
import postEvent from "../../components/images/plus-icon.svg";

export default function EventsContent() {
  return (
    <div className="main">
      <div className="row">
        <div className="col-11">
          <p className="events-header">Upcoming Events</p>
        </div>
        <div className="col-1">
          <a href="/addEvent">
            <img src={postEvent} alt="" className="add-event" />
          </a>
        </div>
      </div>
      <EventCards />
    </div>
  );
}
