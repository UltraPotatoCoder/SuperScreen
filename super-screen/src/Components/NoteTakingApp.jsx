import React from "react";
import { useState, useEffect } from "react";

function NoteTakingApp() {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedNotes");
    if (saved) {
      setSavedNotes(JSON.parse(saved));
    }
  }, []);

  const handleNoteChange = (e) => {
    const words = e.target.value.split(/\s+/); // split input by whitespace
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
    <div>
      <h2>Quick Note Taking App</h2>

      {/* Note Input */}
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Write your quick note here (max 200 words)"
        style={{ width: "100%", height: "100px" }}
      />

      {/* Word Count */}
      <p>{note.split(/\s+/).filter(Boolean).length} / 200 words</p>

      {/* Save Button */}
      <button onClick={saveNote}>Save Note</button>

      {/* Display Saved Notes */}
      <h3>Saved Notes:</h3>
      <ul>
        {savedNotes.map((savedNote, index) => (
          <li key={index}>
            <p>{savedNote}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteTakingApp;
