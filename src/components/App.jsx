import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
