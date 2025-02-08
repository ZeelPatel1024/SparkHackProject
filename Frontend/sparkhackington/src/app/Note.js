import React from "react";
import { useNavigate } from "react-router-dom";

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <a target="_blank" rel="noopener noreferrer" href = "https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prop.title)}&ll=${prop.latitude},${prop.longitude}">Location</a>
      <img
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></img>
      <p>{props.content}</p>
      <p><a href= {`mailto:${props.email}`}>Send email</a></p>
      <button
        onClick={() => {
          props.delete(props.id);
        }}
      >
        🗑️
      </button>
    </div>
  );
}
export default Note;
