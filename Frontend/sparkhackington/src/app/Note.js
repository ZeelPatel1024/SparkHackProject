import React from "react";
import { useNavigate } from "react-router-dom";

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
<<<<<<< HEAD
      <p><a target="_blank" rel="noopener noreferrer" href= {`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.title)}&ll=${props.latitude},${props.longitude}`}>Location</a></p>
=======
      <a target="_blank" rel="noopener noreferrer" href = "https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prop.title)}&ll=${prop.latitude},${prop.longitude}">Location</a>
>>>>>>> 50645a4caefd1092ee4524785c2dce9f5bbca1de
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
