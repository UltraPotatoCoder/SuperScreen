import React, { useState, useEffect } from "react";

const NoteTakingApp = () => {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedNotes");
    if (saved) {
      setSavedNotes(JSON.parse(saved));
    }
  }, []);

  const handleNoteChange = (e) => {
    const words = e.target.value.split(/\s+/);
    if (words.length <= 200) {
      setNote(e.target.value);
    }
  };

  const saveNote = () => {
    if (note.trim()) {
      const newNotes = [...savedNotes, note.trim()];
      setSavedNotes(newNotes);
      localStorage.setItem("savedNotes", JSON.stringify(newNotes));
      setNote("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);
    localStorage.setItem("savedNotes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="note-app">
      <h2>Quick Note Taking App</h2>

      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Write your quick note here (max 200 words)"
        className="note-input"
      />
      <p>{note.split(/\s+/).filter(Boolean).length} / 200 words</p>

      <button onClick={saveNote} className="save-note-btn">
        Save Note
      </button>

      <h3>Saved Notes:</h3>
      <ul className="saved-notes-list">
        {savedNotes.map((savedNote, index) => (
          <li key={index} className="saved-note">
            <p>{savedNote}</p>
            <button
              onClick={() => deleteNote(index)}
              className="delete-note-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteTakingApp;
