import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal";

function Header({ user, setUser }) {
  const [displayLoginModal, setDisplayLoginModal] = useState(false);

  const signupBtn = (
    <button>
      Signup
      <Link to="/signup" element={<Signup />}></Link>
    </button>
  );

  function handleDisplayLoginModal(e) {
    e.preventDefault();
    setDisplayLoginModal(true);
    // <Link
    //   path="/login"
    //   element={

    // }
    // />;
  }

  return (
    <header>
      <a href="/">
        <h1>Crypto Portal</h1>
      </a>
      <Navbar />
      <LoginModal
        setDisplayLoginModal={setDisplayLoginModal}
        displayLoginModal={displayLoginModal}
      />

      <Routes>
        <Route
          path="login"
          element={
            <LoginModal
              setDisplayLoginModal={setDisplayLoginModal}
              displayLoginModal={displayLoginModal}
            />
          }
        />
        <Route path="signup" element={<Signup />} />
        <Route path="favorites" element={null} />
      </Routes>
      {/* <Link to="signup">{<Signup />}</Link> */}
      {/* {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} />} */}
      {user ? (
        <Logout setUser={setUser} />
      ) : (
        <button onClick={handleDisplayLoginModal}>Login</button>
      )}
      {!user ? signupBtn : null}
    </header>
  );
}

export default Header;
