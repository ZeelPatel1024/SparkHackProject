"use client";

import React, { useState } from "react";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); //adding objects into an array array object list
  //needs state because it will change
  function addNote(note) {
    //going to receive a note object
    console.log(note);
    setNotes((prevNotes) => {
      //getting previous value of the notes array
      return [...prevNotes, note]; //get hold of all prev notes and add new note at the end
    });
  }

  function deleteNote(noteId) {
    //getting id from note jsx passing the note id
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== noteId; //return all the notes where the index doesnt equal the id
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            delete={deleteNote}
            image={noteItems.image}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
