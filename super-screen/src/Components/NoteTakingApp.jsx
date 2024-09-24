import React from "react";
import { useState, useEffect } from "react";

function NoteTakingApp() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("note", e.target.value);
  };

  return (
    <div>
      <h2>Note Taking</h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Write notes here..."
        style={{ width: "100%", height: "300px" }}
      ></textarea>
    </div>
  );
}

export default NoteTakingApp;
