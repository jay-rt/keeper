import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

//Declaring functional component
const List = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={handleClick}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default List;
