import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import notes from "../notes";

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <List key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
