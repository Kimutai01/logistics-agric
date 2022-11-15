import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  console.log(user);
  return (
    <div>
      <Link to="/">Home</Link>
      {user.name === "admin" ? <Link to="/add-book">Add Book</Link> : null}
    </div>
  );
}

export default Navbar;
