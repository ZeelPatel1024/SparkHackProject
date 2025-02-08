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
      
      
      {notes.map((noteItem, index) => (
        <>
        <h1>{noteItem.title} Tasks<button onClick={back}>←</button></h1>
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          delete={deleteNote}
          image={noteItem.image}
        />
        </>
      ))}
    </div>
  );
}

export default NotesPage;
