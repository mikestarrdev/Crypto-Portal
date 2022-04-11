import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header({ user, setUser }) {
  return (
    <header>
      <Link to="/">
        <h1>Crypto Portal</h1>
      </Link>
      <Navbar user={user} setUser={setUser} />
    </header>
  );
}

export default Header;
