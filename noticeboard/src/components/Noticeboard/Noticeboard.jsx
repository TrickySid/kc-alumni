import React from "react";
import Navbar from "../Navbar";
import NoticeCards from "./NoticeCards";
import newNotice from "../../components/images/plus-icon.svg";
import "../../styles/Noticeboard/Noticeboard.css";

export default function EventsHome() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <p className="noticeboard-header">Notices</p>
          </div>
          <div className="col-3">
            <a href="/addNotice">
              <img src={newNotice} alt="" className="add-notice" />
            </a>
          </div>
        </div>
        <NoticeCards />
      </div>
    </>
  );
}
