import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    image: "",
  });

  function typeNote(event) {
    const { name, value, files } = event.target;
    if (name === "image" && files) {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNote((prevValue) => ({
            ...prevValue,
            image: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setNote((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  }

  //note is saved in the note constant, but not added to the actual application yet
  function submitNote(event) {
    //now need to get function to pass back to app js, so need a fuction as a prop in app js
    props.onAdd(note); //pass over this note to the app js that way

    setNote({
      title: null,
      content: null,
      image: null,
    });
    //default button behavior is to refresh page, dont want that
    // so pass event, which is the button click, and prevent default
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Enter Task/Job" onChange={typeNote} />
        <input type="file" accept="image/*" onChange={typeNote} name="image" />
        <img
          style={{
            width: "0px",
            height: "0px",
            backgroundImage: `url(${note.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></img>
        <textarea
          onChange={typeNote}
          name="content"
          placeholder="Write a job description..."
          rows="3"
        />
        <button onClick={submitNote}>✎</button>
      </form>
    </div>
  );
}

export default CreateArea;

