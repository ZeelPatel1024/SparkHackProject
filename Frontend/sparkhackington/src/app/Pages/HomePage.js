// Code is added here for testing purposes, it will be moved.
// There will be a slight error but that will be resolved once we make it look pretty.
import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

    const [jobId, setJobId] = useState('');
    const [jobName, setJobName] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobImage, setJobImage] = useState("");
    const [jobOwnerName, setJobOwnerName] = useState("");
    const [jobAvailable, setJobAvailable] = useState("");
    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate(); // Hook for navigation

    function submitNote(event) {
        event.preventDefault();
        navigate("/addNote"); // Redirect to notes page
    }

    function navigateToSignUpPage(event){
      event.preventDefault();
      navigate("/signIn")
    }

    function Devpost(event){
      event.preventDefault();
      navigate("https://devpost.com/software/snap-link?ref_content=user-portfolio&ref_feature=in_progress");
    }

    useEffect(() => {
      (async () => await Load())();
    }, []);
    
       
    async function  Load(){
      const result = await axios.get(
        "http://localhost:8080/api/v1/job/getAll");
        setJobs(result.data)
        console.log(result.data);
    }

  return (
    <div>
      <nav>
      <div class = "nav">
    <div class="group">
        <button onClick ={navigateToSignUpPage}>Login</button>
        <a target="_blank" rel="noopener noreferrer" href = "https://devpost.com/software/snap-link?ref_content=user-portfolio&ref_feature=in_progress">About</a>
    </div>
      </div>
      </nav>
      <header className="Mohan">
      <span>Snap Link</span>
      <div>
        <button onClick={submitNote}>Click to redirect</button>
        <button onClick={navigateToSignUpPage}>Create Buisness Account</button>
      </div>
    </header>
    </div>
  );
}