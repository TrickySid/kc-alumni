import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "../../styles/Noticeboard/NoticeCards.css";

export default function NoticeCards() {
  const [noticeCards, setnoticeCards] = useState([]);
  useEffect(() => {
    const noticeCardRef = collection(db, "Notices");
    const q = query(noticeCardRef, orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      const noticeCards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setnoticeCards(noticeCards);
      console.log(noticeCards);
    });
  }, []);

  return (
    <div className="notices">
      {noticeCards.length === 0 ? (
        <p>No Notices!</p>
      ) : (
        noticeCards.map(({ id, title, description, date }) => (
          <>
            <div className="notice-card" key={id}>
              <div className="notice-card-content">
                <div className="notice-details">
                  <p className="notice-title">{title}</p>
                  <p className="notice-desc">{description}</p>
                  <p className="notice-date">{date.toDate().toDateString()}</p>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}
