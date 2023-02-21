import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/EventCards.css";
import clockImg from "../components/images/clock-icon.jpg";
import locationImg from "../components/images/location-icon.jpg";

export default function EventCards() {
  const [eventCards, setEventCards] = useState([]);
  useEffect(() => {
    const eventCardRef = collection(db, "Events");
    const q = query(eventCardRef, orderBy("time", "asc"));
    onSnapshot(q, (snapshot) => {
      const eventCards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEventCards(eventCards);
      console.log(eventCards);
    });
  }, []);

  return (
    <div className="event-cards">
      {eventCards.length === 0 ? (
        <p>No Upcoming Events!</p>
      ) : (
        eventCards.map(({ id, title, description, imgURL, time, location }) => (
          <>
            <div className="card">
              <div className="row" key={id}>
                <div className="col-3">
                  <div className="box">
                    <img src={imgURL} alt="event img" className="event-img" />
                  </div>
                </div>
                <div className="col-9">
                  <div className="card-content">
                    <div className="details">
                      <p className="event-title">{title}</p>
                      <p className="card-item">{description}</p>
                    </div>
                    <div className="date-time">
                      <img src={clockImg} alt="" className="clock-icon" />
                      <p className="card-item">
                        {time.toDate().toDateString()}
                      </p>
                    </div>
                    <div className="date-time">
                      <img src={locationImg} alt="" className="loc-icon" />
                      <p className="card-item">{location}</p>
                    </div>
                    <div className="tag-btn">
                      <div className="tag">
                        <p className="tag-name">Tag</p>
                      </div>
                      <div className="view-btn">
                        <p className="view-btn-txt">VIEW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}
