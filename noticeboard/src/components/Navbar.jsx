import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav flex-col-hstart-vstart clip-contents">
      <div className="nav-content flex-row-vcenter">
        <div className="user-info flex-row-vcenter">
          <div className="clg-logo" />
          <div className="cu-name flex-col">
            <p className="clg-name">KCCEMSR</p>
            <p className="user-name">Admin / User A</p>
          </div>
        </div>
        <div className="nav-options flex-row-vcenter">
          <div className="nav-item-active">
            <a href="/">
              <button className="nav-item">NOTICEBOARD</button>
            </a>
          </div>
          <a href="/events">
            <button className="nav-item">EVENTS</button>
          </a>
          <a href="/fundraising">
            <button className="nav-item">FUNDRAISING</button>
          </a>
          <a href="/jobsBoard">
            <button className="nav-item">JOBS</button>
          </a>
        </div>
        <div className="nav-divider" />
      </div>
    </div>
  );
}
