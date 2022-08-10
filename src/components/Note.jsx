import React from "react";

//Declaring functional component
const List = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>DELETE</button>
    </div>
  );
};

export default List;
