import React, { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Header from "./Header";

import CoinTracker from "./CoinTracker";

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
        <CoinTracker user={user} />
      </MainContainer>
    </div>
  );
}

export default App;
