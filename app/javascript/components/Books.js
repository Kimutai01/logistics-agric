import React, { useEffect, useState } from "react";
import { fetchBooks } from "../redux/bookSlice";
import { fetchUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchUser());
  }, []);

  const displayBooks = books.map((book) => (
    <div key={book.id}>
      <h1>{book.name}</h1>
      <Link to={`/books/${book.id}`}>View Book</Link>
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
