// Code is added here for testing purposes, it will be moved.
// There will be a slight error but that will be resolved once we make it look pretty.
import React from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function LandingPage() {

    const location = useLocation();
  // Access passed data from location.state
//   const { id } = location.state || {}; // Default to empty object if undefined
    const id = location.state.LOL;

  useEffect(() => {
    alert(location.state);
  }, []);

  return (
    <div className="landing"> 
 
        <h1>LandingPage</h1>
        <p>{id}</p>
    </div>
  );
}