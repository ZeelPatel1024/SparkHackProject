"use client";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NotesPage from "./NotesPage";

import Home from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LandingPage from "./Pages/LandingPage";

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
        <Route path="/signIn" element={<SignUpPage></SignUpPage>} />
        <Route path="/landingPage" element={<LandingPage></LandingPage>} />
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
