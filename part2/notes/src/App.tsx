import { useState } from "react";
import Note from "./components/Note";
import { notesType } from "./main";
import "./App.css";

function App({ notes }: { notes: notesType }) {
  const [stateNotes, setStateNotes] = useState(notes);
  const [newNote, setNewNote] = useState("a new note ...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: stateNotes.length + 1,
    };

    setStateNotes(stateNotes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? stateNotes
    : stateNotes.filter((note) => note.important);

  return (
    <>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;
