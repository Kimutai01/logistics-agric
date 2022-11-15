import React, { useEffect, useState } from "react";
import { fetchBooks } from "../redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EachBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const displayEachBook = books.map((book) =>
    book.id == Number(params.id) ? (
      <div key={book.id}>
        <h1>{book.name}</h1>
      </div>
    ) : null
  );

  return <div>{displayEachBook}</div>;
}

export default EachBook;
