"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", location: "", content: "", image: "" ,email: ""});
  const navigate = useNavigate(); // Hook for navigation

  function typeNote(event) {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNote((prevValue) => ({ ...prevValue, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setNote((prevValue) => ({ ...prevValue, [name]: value }));
    }
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);

    setNote({ title: "", location: "", content: "", image: "" , email: ""}); // Clear input fields

    navigate("/notes"); // Redirect to notes page
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Enter Task/Job" value={note.title} onChange={typeNote} />
        <input name="location" placeholder="Enter Location" value={note.location} onChange={typeNote} />
        <input type="file" accept="image/*" onChange={typeNote} name="image" />
        {note.image && <img src={note.image} alt="Preview" style={{ width: "100px", height: "100px" }} />}
        <textarea name="content" placeholder="Write a job description..." rows="3" value={note.content} onChange={typeNote} />
        <input type = "email" name="email" placeholder="Enter Email Contact" value={note.email} onChange={typeNote} />
        <button onClick={submitNote}>✎</button>
      </form>
    </div>
  );
}

export default CreateArea;
