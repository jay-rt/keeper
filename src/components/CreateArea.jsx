import React, { useState } from "react";

//Defining a component that takes props
const CreateArea = (props) => {
  //Declaring a new state varaible
  const [createNote, setCreateNote] = useState({
    title: "",
    content: "",
  });

  //handling the event that triggers the change
  const handleChange = (event) => {
    //definig 2 variable using destructuring
    const { name, value } = event.target;
    //using set function to update the state variable
    setCreateNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={createNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={createNote.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(createNote);
            //preventing default behaviour of html form
            setCreateNote({
              title: "",
              content: "",
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
