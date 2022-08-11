import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Defining a component that takes props
const CreateArea = (props) => {
  //Declaring a new state varaible
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: uuidv4(),
  });

  //handling the event that triggers the change
  const handleChange = (event) => {
    //definig 2 variable using destructuring
    const { name, value } = event.target;
    //using set function to update the state variable
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      id: uuidv4(),
    });
    //preventing default behaviour of html form
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
