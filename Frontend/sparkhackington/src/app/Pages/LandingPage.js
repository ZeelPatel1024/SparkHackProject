// Code is added here for testing purposes, it will be moved.
// There will be a slight error but that will be resolved once we make it look pretty.
import React from "react";
import { BrowserRouter as Router, Routes, Route , useNavigate } from "react-router-dom";
import './LandingPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function LandingPage() {

    const location = useLocation();
  // Access passed data from location.state
//   const { id } = location.state || {}; // Default to empty object if undefined
    const [items, setItems] = useState([]);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
    }
  }, []);

  const navigate = useNavigate(); 

  function NavigateToBuisnesses(event){
    event.preventDefault();
    navigate("/Owners");
  }

  function NavigateToJobs(event){
    event.preventDefault();
    navigate("/notes");
  }

  function NavigateToCrateJob(event){
    event.preventDefault();
    navigate("/addNote");
  }

  return (

    <div className="landingPage"> 
        <h1>LandingPage</h1>
        <p>{items}</p>

        <div className="landing">
            <div className="comps">
                <div className="cardComp">
                    <h1>Add Buisness</h1>
                </div>
                <div className="cardComp">
                <button onClick={NavigateToCrateJob}><h1>Add Job</h1></button>
                </div>
            </div>

            <div className="comps">
                <div className="cardComp">
                    <button onClick={NavigateToBuisnesses}><h1>List All Buisness</h1></button>
                </div>
                <div className="cardComp">
                <button onClick={NavigateToJobs}><h1>List All Jobs</h1></button>
                </div>
            </div>
        </div>

    </div>
  );
}