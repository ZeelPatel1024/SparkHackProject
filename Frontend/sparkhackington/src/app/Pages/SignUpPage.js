import React from 'react'
import './SignUpPage.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SignUpPage () {

    // Use state to store the input value
    const [inputCreateName, setInputCreateName] = useState('');
    const [inputCreatePassword, setInputCreatePassword] = useState('');
    const [inputCreateEmail, setInputCreateEmail] = useState('');

    const [inputLogInEmail, setInputLogInEmail] = useState('');
    const [inputLogInPassword, setInputLogInPassword] = useState('');

    const [items, setItems] = useState([]);

    const navigate = useNavigate(); // Hook for navigation

    // function navigateToLandingPage(event){
    //     event.preventDefault();
    //     navigate("/landingPage", {id: })
    //   }

    // Function to handle input changes
    const handleInputCreateAccountChange = (event) => {
        setInputCreateName(event.target.value);
    };

    const handleInputPasswordChange = (event) => {
        setInputCreatePassword(event.target.value);
    };

    const handleInputEmailChange = (event) => {
        setInputCreateEmail(event.target.value);
    };

    const handleLogInEmail = (event) => {
        setInputLogInEmail(event.target.value);
    };
    const handleLogInPassword = (event) => {
        setInputLogInPassword(event.target.value);
    };

    async function save(event)
    {
        event.preventDefault();
    try
        {
            const response = await axios.post("http://localhost:8080/api/v1/owner/save",
        {
        name: inputCreateName,
        password: inputCreatePassword,
        email: inputCreateEmail,
        job_listing: [],
        business_list: []
        });
        //   alert("Student Registation Successfully " + response.data.id);
          setInputCreateName("");
          setInputCreatePassword("");
          setInputCreateEmail("");
        //   navigate("/landingPage", { state: { LOL: "Hi" } });
          
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
    
   }

   async function login(event)
    {
        event.preventDefault();
        
    try
        {
         const response = await axios.post("http://localhost:8080/api/v1/owner/login",
        {
        email: inputLogInEmail,
        });

            if (!response || !response.data) {
                alert("No data returned from the API. ");
                return; // Exit early if response is null or empty
            }else{
                
                // alert("Student Login Successfully " + response.data.id);
                // localStorage.setItem('myData: ', JSON.stringify(response.data.id));
                localStorage.setItem('items', JSON.stringify(response.data.id));
                setInputLogInEmail("");
                navigate("/landingPage");
            }
        }
    catch(err)
        {
          alert("User Login Failed");
        }
   }

   function back(event){
    event.preventDefault();
    navigate("/")
   }

  return (
    <div>
    <button onClick={back} className="stoppppp">Back to home</button>
    <div className='signupPage'>
         <div className="signUpBox">
            <div className='insideSignupText'>
                <h1>Don't have an account?</h1>
                <div className='inputsCreateAccount'>

                <p>Stuff</p>
                <input
                    type="Name" // You can change the type as needed (e.g., email, number, password)
                    value={inputCreateName}
                    onChange={handleInputCreateAccountChange}
                    placeholder="Enter your name"
                />

                <input
                    type="Email" // You can change the type as needed (e.g., email, number, password)
                    value={inputCreateEmail}
                    onChange={handleInputEmailChange}
                    placeholder="Enter your email"
                />

                <input
                    type="Password" // You can change the type as needed (e.g., email, number, password)
                    value={inputCreatePassword}
                    onChange={handleInputPasswordChange}
                    placeholder="Enter your password"
                />

                <button onClick={save}>Create Account</button>

                </div>
            </div>
        </div>
        <div className="signUpBox">
            <div className='insideSignupText'>
                <h1>Already have an account?</h1>
                <p>Stuff</p>
                <input
                    type="Id" // You can change the type as needed (e.g., email, number, password)
                    value={inputLogInEmail}
                    onChange={handleLogInEmail}
                    placeholder="Enter your email"
                />
                <input
                    type="Id" // You can change the type as needed (e.g., email, number, password)
                    value={inputLogInPassword}
                    onChange={handleLogInPassword}
                    placeholder="Enter your password"
                />
                <button onClick={login}>Log In</button>
            </div>
        </div>
    </div>
    </div>
  )
}
