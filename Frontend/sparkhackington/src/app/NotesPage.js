"use client";

import React from "react";
import Note from "./Note";
import { useNavigate } from "react-router-dom";
import "./stopp.css";



function NotesPage({ notes, deleteNote }) {

  const navigate = useNavigate(); 
  function back(event) {
    event.preventDefault();
    navigate("/"); // Redirect to main page
  }

  return (
    <div>
        <h1>Task
          <button onClick={back} className="stoppppp">Back to landing page ←</button>
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
