import React, { useState } from "react";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { toast } from "react-toastify";

export default function AddNotice() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: Timestamp.now().toDate(),
  });

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handlePublish = async (event) => {
    if (!formData.title || !formData.description) {
      toast("Please fill all the fields!", { type: "error" });
      return;
    }
    event.preventDefault();
    const { title, description, date } = formData;
    fetch(
      "https://alumni-network-6b6d5-default-rtdb.firebaseio.com/noticeRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, date }),
      }
    );

    const noticeCardRef = collection(db, "Notices");

    addDoc(noticeCardRef, {
      title: formData.title,
      description: formData.description,
      date: Timestamp.now().toDate(),
    })
      .then(() => {
        toast("Notice added successfully", { type: "success" });
        setFormData({
          title: "",
          description: "",
          image: "",
          location: "",
        });
      })
      .catch((err) => {
        toast("Error adding Notice!", { type: "error" });
      });
  };

  return (
    <>
      <div
        className="add-notice-form bg-light"
        style={{
          position: "absolute",
          padding: "20px",
          top: "40%",
          left: "50%",
          width: "500px",
          background: "#fff",
          boxSizing: "border-box",
          boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          fontFamily: "Montserrat, sans-serif",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 style={{ fontWeight: "600" }}>Post Notice</h2>
        {/* Title */}
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={formData.title}
          onChange={handleChange}
        />
        {/* Description */}
        <label htmlFor="">Description</label>
        <textarea
          name="description"
          className="form-control"
          value={formData.description}
          onChange={handleChange}
        />
        <button
          className="form-control btn-primary mt-2"
          onClick={handlePublish}
          style={{
            background: "blue",
            color: "white",
            backgroundColor: isHovering ? "#0014FF" : "#0002A1",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Publish
        </button>
      </div>
    </>
  );
}
