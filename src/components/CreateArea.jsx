import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

//Defining a component that takes props
const CreateArea = (props) => {
  //Declaring a new state varaible
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: uuidv4(),
  });

  const [isExpanded, setExpanded] = useState(false);

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

  //handling the click event
  const expand = () => {
    setExpanded(true);
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
      <form className="create-note">
        <input
          type={isExpanded ? "text" : "hidden"}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onClick={expand}
          onKeyUp={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
