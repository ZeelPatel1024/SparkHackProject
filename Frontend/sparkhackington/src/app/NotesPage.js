"use client";

import React from "react";
import Note from "./Note";
import { useNavigate } from "react-router-dom";
import "./stopp.css";
import axios from 'axios'
import { useEffect, useState } from 'react'


function NotesPage({ notes, deleteNote }) {

  const [jobs, setJobs] = useState([]);
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    (async () => await Load())();
    (async () => await LoadEmail())();
  }, []);
  
     
  async function  Load(){
    const result = await axios.get(
      "http://localhost:8080/api/v1/job/getAll");
      setJobs(result.data)
      console.log(result.data);
  }

  async function  LoadEmail(){
    const result = await axios.get(
      "http://localhost:8080/api/v1/owner/search/" + jobs.ownerId);
      setOwner(result.data)
      console.log(result.data);
  }

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
        {jobs.map(function fn(job)
            {
                return(
                  <Note
                  
                  id={job.id}
                  title={job.name}
                  // location={job.location}
                  content={job.description}
                  email={owner.email}
                  delete={deleteNote}
                  image={job.image}
                />
                );
            })}
      {/* {notes.map((noteItem, index) => (
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
      ))} */}
    </div>
  );
}

export default NotesPage;
