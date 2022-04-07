import React, { useState, useEffect } from "react";
import "../index.css";
import Login from "./Login";
import CoinTracker from "./CoinTracker";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  return (
    <div>
      {currentUser ? (
        <h3>Welcome! You're logged in {currentUser} </h3>
      ) : (
        <Login setCurrentUser={setCurrentUser} />
      )}
      <h1>Crypto Portal</h1>
      <CoinTracker />
    </div>
  );
}

export default App;
