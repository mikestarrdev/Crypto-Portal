import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar";

function Header({ user, setUser }) {
  const signupBtn = (
    <button>
      Signup
      <Link to="/signup" element={<Signup />}></Link>
    </button>
  );

  return (
    <header>
      <a href="/">
        <h1>Crypto Portal</h1>
      </a>
      <Navbar />

      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="favorites" element={null} />
      </Routes>

      {/* <Link to="signup">{<Signup />}</Link> */}

      {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} />}
      {!user ? signupBtn : null}
    </header>
  );
}

export default Header;
