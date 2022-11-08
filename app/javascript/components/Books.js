import React, { useEffect, useState } from "react";
import { fetchBooks } from "../redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    dispatch(fetchBooks());
    setAllBooks(books);
  }, []);
  console.log(allBooks);
  const displayBooks = books.map((book) => (
    <div key={book.id}>
      <h1>{book.name}</h1>
    </div>
  ));

  return (
    <div>
      books
      {displayBooks}
    </div>
  );
}

export default Books;
