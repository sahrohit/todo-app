import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNewNote] = useState([]);

  function addNote(json) {
    if (json.title.length !== 0) {
      setNewNote((prev) => {
        return [...prev, { title: json.title, content: json.content }];
      });
    }
  }

  for (let index = 0; index < notes.length; index++) {
    console.log(notes[index]);
  }

  function createNotePanel(note, index) {
    return (
      <Note
        key={index}
        index={index}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  }

  function deleteNote(id) {
    setNewNote((prevItems) => {
      return prevItems.filter((_item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return createNotePanel(note, index);
      })}
      <Footer />
    </div>
  );
}

export default App;
