import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArea(props) {
  const [note, setNote] = useState({ 
    title: "", 
    longitude: "", 
    latitude: "", 
    content: "", 
    image: "",
    email: "",
    url: ""
  });
  const [locations, setLocations] = useState([]);
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  function notes(event) {
    event.preventDefault();
    navigate("/notes");
  }

  function typeNote(event) {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNote((prevValue) => ({ ...prevValue, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setNote((prevValue) => ({ ...prevValue, [name]: value }));
    }
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);

    // Add location to locations array before clearing
    if (note.latitude && note.longitude) {
      setLocations(prev => [...prev, {
        title: note.title,
        latitude: note.latitude,
        longitude: note.longitude,
        timestamp: new Date().toLocaleString()
      }]);
    }

    // Log current location
    console.log(`New location added - Title: ${note.title}, Latitude: ${note.latitude}, Longitude: ${note.longitude}`);
    
    // Construct Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(note.title)}&ll=${note.latitude},${note.longitude}`;
    
    // Clear the note form
    //setNote({ title: "", longitude: "", latitude: "", content: "", image: "", email: "" });

    // Navigate to Google Maps URL
    window.open(googleMapsUrl, '_blank');

    // Navigate back to notes page
    navigate("/notes");
  }

  return (
    <div>
      <button onClick={notes}>View Tasks</button>
      <form>
        <input name="title" placeholder="Enter Task/Job" value={note.title} onChange={typeNote} />
        <input name="latitude" placeholder="Enter Latitude" value={note.latitude} onChange={typeNote} />
        <input name="longitude" placeholder="Enter Longitude" value={note.longitude} onChange={typeNote} />
        <input type="file" accept="image/*" onChange={typeNote} name="image" />
        {note.image && <img src={note.image} alt="Preview" style={{ width: "100px", height: "100px" }} />}
        <textarea name="content" placeholder="Write a job description..." rows="3" value={note.content} onChange={typeNote} />
        <input type="email" name="email" placeholder="Enter Email Contact" value={note.email} onChange={typeNote} />
        <button onClick={submitNote}>✎</button>
      </form>
    </div>
  );
}

export default CreateArea;
