import React, { useState } from "react";
import Header from "./pattern/header";
import Footer from "./pattern/footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id){
    setNotes((prevNotes) => 
    prevNotes.filter((noteItem, index)=>{return index !== id}))
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     { notes.map((newNote, index) => 
       <Note
       key={index} id={index} title={newNote.title} content={newNote.content} onDelete={deleteNote}/>
       )}
      <Footer />
    </div>
  );
}

export default App;
