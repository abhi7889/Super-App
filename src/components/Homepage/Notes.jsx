import React, { useState, useEffect } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const STORAGE_KEY = "notes";

  useEffect(() => {
    const savedNote = localStorage.getItem(STORAGE_KEY);
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleNoteChange = (event) => {
    const updatedNote = event.target.value;
    setNote(updatedNote);
    localStorage.setItem(STORAGE_KEY, updatedNote);
  };

  return (
    <div className="notes-div">
      <div className="heading"> All notes</div>
      <textarea
        className="text-area"
        value={note}
        onChange={handleNoteChange}
        style={{ resize: "none" }}
      />
    </div>
  );
}
