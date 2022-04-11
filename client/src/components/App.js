import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Header from "./Header";
import CoinTracker from "./CoinTracker";
import CoinData from "./CoinData";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [user, setUser] = useState("");

  const MainContainer = styled.div`
    display: grid;
    /* grid-template-columns: 60% 40%; */
  `;

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          // console.log(user);
          setUser(user);
        });
      }
    });
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header user={user} setUser={setUser} />
      <MainContainer>
        <Routes>
          <Route path="/" element={<CoinTracker user={user} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/:id" element={<CoinData />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
