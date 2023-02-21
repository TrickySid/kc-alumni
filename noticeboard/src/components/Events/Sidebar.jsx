import React from "react";
import "../../styles/Events/Sidebar.css";

const viewHeight = window.outerHeight;

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ height: viewHeight }}>
      <p className="title">CATEGORIES</p>
      <div className="options">
        <div className="opt-active">
          <button className="category-btn">All</button>
        </div>
        <div className="opt">
          <button className="category-btn">Cultural</button>
        </div>
        <div className="opt">
          <button className="category-btn">Festival</button>
        </div>
        <div className="opt">
          <button className="category-btn">Meet</button>
        </div>
        <div className="opt">
          <button className="category-btn">Reunion</button>
        </div>
        <div className="opt">
          <button className="category-btn">Technical</button>
        </div>
      </div>
    </div>
  );
}
