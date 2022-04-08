import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import CoinTracker from "./CoinTracker";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  const AppContainer = styled.div`
    display: grid;
    /* grid-template-columns: 60% 40%; */
  `;

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => {
          console.log(currentUser);
          setCurrentUser(currentUser.username);
        });
      }
    });
  }, []);

  return (
    <div>
      <GlobalStyle />
      {!currentUser ? <Signup /> : null}
      {!currentUser ? (
        <Login setCurrentUser={setCurrentUser} />
      ) : (
        <Logout setCurrentUser={setCurrentUser} />
      )}
      <h1>Crypto Portal</h1>
      <AppContainer>
        <CoinTracker />
      </AppContainer>

      {/* <Routes>
        <Route path="signup" element={<Signup />} />
        {/* <Route path="login" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
