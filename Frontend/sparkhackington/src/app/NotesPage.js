"use client";

import React from "react";
import Note from "./Note";

function NotesPage({ notes, deleteNote }) {
  return (
    <div>
      <h1>Tasks</h1>
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          delete={deleteNote}
          image={noteItem.image}
        />
      ))}
    </div>
  );
}

export default NotesPage;
