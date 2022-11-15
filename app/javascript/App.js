import React, { useEffect, useState } from "react";
import Books from "./components/Books";
import EachBook from "./components/EachBook";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<EachBook />} />
        {user.name === "admin" ? (
          <Route path="/add-book" element={<AddBook />} />
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
