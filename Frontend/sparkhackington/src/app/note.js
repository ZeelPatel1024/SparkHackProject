import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <img
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></img>
      <p>{props.content}</p>
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
