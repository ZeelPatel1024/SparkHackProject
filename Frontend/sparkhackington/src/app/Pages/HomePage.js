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

    useEffect(() => {
      (async () => await Load())();
    }, []);
    
       
       
    async function  Load(){
      const result = await axios.get(
        "http://localhost:8080/api/v1/job/getAll");
        setJobs(result.data);
        console.log(result.data);
    }

  return (
<<<<<<< HEAD
    <div className="home"> 
            <h1 >Welcome to _______</h1>
            <button onClick={submitNote}>Click to redirect</button>
            <button onClick={navigateToSignUpPage}>Login Buisness Account</button>
            {jobs.map(function fn(job)
            {
              return(
                <h1>{job.name} {job.description} {job.image} {job.available ? <h1>True</h1> : <h1>False</h1>}</h1>
              );
            })}

=======
    <div>
      <nav>
      <div class = "nav">
    <div class="group">
        <button>Login</button>
        <button>About</button>
    </div>
      </div>
      </nav>
      <header className="Mohan">
      Welcome to Harsh Dizzler
      <div>
        <button onClick={submitNote}>Click to redirect</button>
        <button>Create Buisness Account</button>
      </div>
    </header>
>>>>>>> 5b4d04164d3c7174d002626a1f744c706ff891bd
    </div>
  );
}