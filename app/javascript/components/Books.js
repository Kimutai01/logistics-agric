import React, { useEffect, useState } from "react";
import { fetchBooks } from "../redux/bookSlice";
import { fetchUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Books() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const books = useSelector((state) => state.books.books);
  const user = useSelector((state) => state.user.user);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchUser());
    setAllBooks(books);
  }, []);
  const displayBooks = allBooks.map((book) => (
    <div key={book.id}>
      <h1>{book.name}</h1>
    </div>
  ));

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
        setAllBooks(data);
      });
  };

  const addBook = (
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

  return (
    <div>
      books
      {displayBooks}
      {/* {user.name === "admin" ? <h1>admin</h1> : <h1>not admin</h1>} */}
      {addBook}
    </div>
  );
}

export default Books;
