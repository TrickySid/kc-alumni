import React, { useState } from "react";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
import { toast } from "react-toastify";

export default function AddEvent() {
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
    image: "",
    time: Timestamp.now().toDate(),
    location: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.image ||
      !formData.location
    ) {
      alert("Please fill all the fields!");
      return;
    }

    const storageRef = ref(
      storage,
      `images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
          location: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const eventCardRef = collection(db, "Events");

          addDoc(eventCardRef, {
            title: formData.title,
            description: formData.description,
            imgURL: url,
            time: Timestamp.now().toDate(),
            location: formData.location,
          })
            .then(() => {
              toast("Event added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding Event!", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <>
      <div
        className="add-event-form bg-light"
        style={{
          position: "absolute",
          padding: "20px",
          top: "50%",
          left: "50%",
          width: "500px",
          background: "#fff",
          boxSizing: "border-box",
          boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>Create Event</h2>
        {/* Title */}
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        {/* Description */}
        <label htmlFor="">Description</label>
        <textarea
          name="description"
          className="form-control"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />
        {/* Location */}
        <label htmlFor="">Location</label>
        <input
          type="text"
          name="location"
          className="form-control"
          value={formData.location}
          onChange={(e) => handleChange(e)}
        />
        {/* Image */}
        <label htmlFor="">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="form-control"
          onChange={(e) => handleImageChange(e)}
        />
        {progress === 0 ? null : (
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped mt-2"
              style={{ width: `${progress}%` }}
            >
              {`Uploading image ${progress}%`}
            </div>
          </div>
        )}
        <button
          className="form-control btn-primary mt-2"
          onClick={handlePublish}
          style={{
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
