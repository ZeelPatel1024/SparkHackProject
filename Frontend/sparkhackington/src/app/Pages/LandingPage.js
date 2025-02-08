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
    const [items, setItems] = useState();
    const [businesses, setBusinesses] = useState([]);

    const [owner, setOwner] = useState([]);

    const [businessesName, setBusinessesName] = useState();
    const [businessesLocation, setBusinessesLocation] = useState();
    const [businessesCategory, setBusinessesCategory] = useState();
    const [businessesDescription, setBusinessesDescription] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    // alert(items);
    setItems(items);
    (async () => await Load(items))();
  }, []);


  async function Load(items) {
    // alert("Here " + items);
    try {
      const result = await axios.get(
        "http://localhost:8080/api/v1/owner/search_businesses/" + items
      );
    //   alert("Data received: " + JSON.stringify(result.data));
      setBusinesses(result.data);
    } catch (err) {
      alert("Error occurred:" + err); // Log the entire error
    }

    try {
        const result = await axios.get(
          "http://localhost:8080/api/v1/owner/search/" + items
        );
        // alert("Data received: " + JSON.stringify(result.data));
        setOwner(result.data);
      } catch (err) {
        alert("Error occurred:" + err); // Log the entire error
      }
  }

  const handleAddBuisnessName = (event) => {
    setBusinessesName(event.target.value);
    };

    const handleAddBuisnessLocation = (event) => {
        setBusinessesLocation(event.target.value);
    };

    const handleAddBuisnessCategory = (event) => {
        setBusinessesCategory(event.target.value);
    };

    const handleAddBuisnessDescripton = (event) => {
        setBusinessesDescription(event.target.value);
    };

    async function save(event)
    {
        event.preventDefault();
    try
        {
            const response = await axios.post("http://localhost:8080/api/v1/owner/saveBusiness",
        {
        owner_id: items,
        business: {
            name: businessesName,
            location: businessesLocation,
            category: businessesCategory,
            description: businessesDescription
        }
        });
        setBusinessesName("");
        setBusinessesLocation("");
        setBusinessesCategory("");
        setBusinessesDescription("");
        
        // alert("added buisness");
        (async () => await Load(items))();
          
        }
    catch(err)
        {
          alert("Failed");
        }
    
   }

   const navigate = useNavigate(); 

  function backToHomePage(event) {
    event.preventDefault();
    navigate("/"); // Redirect to main page
  }

  return (

    <div className="landingPage"> 
        <h1>Welcome Buisness Owner {owner.name}</h1>
        <div>
            <p>My Buisnesses</p>
            <button onClick={backToHomePage}>Log Out</button>
        </div>
        

        <div className="map">
            {businesses.map(function fn(buisness)
            {
                return(
                <div className="buisnessCards">
                    <p>Name: {buisness?.name}</p>
                    <p>Location: {buisness?.location}</p>
                    <p>Category: {buisness?.category}</p>
                    <p>Description: {buisness?.description}</p>
                    
                </div>
                );
            })}
        </div>

        <div className="landing">
            <div className="comps">
                <div className="cardComp">
                    <div className="inputs">
                        <h1>Add Buisness</h1>
                        <input
                            type="Name" // You can change the type as needed (e.g., email, number, password)
                            value={businessesName}
                            onChange={handleAddBuisnessName}
                            placeholder="Enter the name"
                        />
                        <input
                            type="Location" // You can change the type as needed (e.g., email, number, password)
                            value={businessesLocation}
                            onChange={handleAddBuisnessLocation}
                            placeholder="Enter the location"
                        />
                        <input
                            type="Category" // You can change the type as needed (e.g., email, number, password)
                            value={businessesCategory}
                            onChange={handleAddBuisnessCategory}
                            placeholder="Enter the category"
                        />
                        <input
                            type="Description" // You can change the type as needed (e.g., email, number, password)
                            value={businessesDescription}
                            onChange={handleAddBuisnessDescripton}
                            placeholder="Enter the description"
                        />

                        <button onClick={save}>Add Buisness</button>
                    </div>
                </div>
                <div className="cardComp">
                    <h1>Add Job</h1>
                </div>
            </div>

            <div className="comps">
                <div className="cardComp">
                    <h1>List All Buisness</h1>
                </div>
                <div className="cardComp">
                    <h1>Add All Jobs</h1>
                </div>
            </div>
        </div>

    </div>
  );
}