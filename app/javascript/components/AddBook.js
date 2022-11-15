import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const addBookEvent = (e) => {
    e.preventDefault();
    fetch("/api/v1/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setName("");
          navigate("/");
        }, 1000);
      });
  };

  return (
    <div>
      <h1>Add Book</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={addBookEvent}>Add</button>
    </div>
  );
}

export default AddBook;
