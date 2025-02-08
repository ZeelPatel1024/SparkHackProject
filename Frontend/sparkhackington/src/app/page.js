"use client";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NotesPage from "./NotesPage";

import Home from "./Pages/HomePage";

const { getJson } = require("serpapi");

// getJson({
//   engine: "google_maps",
//   q: "coffee",
//   ll: "@-87.64781, 41.87280,14z",
//   api_key: "797ec50746db81d2d8a0f40ede885145bd8bc79e0a735a7a34f578cf4a6693a6"
// }, (json) => {
//   console.log(json);
// });

function App() {
  const [notes, setNotes] = useState([]); // State for notes array

  function addNote(note) {
    console.log(note);
    setNotes((prevNotes) => [...prevNotes, note]); // Add new note
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== noteId)); // Remove note by index
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addNote" element={<CreateArea onAdd={addNote} />} />
        <Route
          path="/notes"
          element={
            <NotesPage notes={notes} deleteNote={deleteNote} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
