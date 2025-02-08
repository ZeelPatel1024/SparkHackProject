"use client";

import React from "react";
import Note from "./Note";
import { useNavigate } from "react-router-dom";




function NotesPage({ notes, deleteNote }) {

  const navigate = useNavigate(); 
  function back(event) {
    event.preventDefault();
    navigate("/"); // Redirect to main page
  }

  return (
    <div>
      <h1>Tasks
        <br></br>
        <button onClick={back}>Back to main page ←</button>
        </h1>
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          location={noteItem.location}
          content={noteItem.content}
          email={noteItem.email}
          delete={deleteNote}
          image={noteItem.image}
        />
      ))}
    </div>
  );
}

export default NotesPage;
