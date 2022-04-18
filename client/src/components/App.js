import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Header from "./Header";
import CoinTracker from "./CoinTracker";
import CoinData from "./CoinData";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "./Footer";
import Forum from "./Forum";
import Subforum from "./Subforum";
import CreatePost from "./CreatePost";
import Post from "./Post";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment";
import Favorites from "./Favorites";
import NoRoute from "./NoRoute";
import LoginRequired from "./LoginRequired";

function App() {
  const [user, setUser] = useState("");
  const [coinData, setCoinData] = useState([]);

  <GlobalStyle />;

  const MainContainer = styled.div`
    display: grid;
    /* grid-template-columns: 60% 40%; */
  `;

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((r) => r.json())
      .then((coinData) => {
        // console.log(coinData);
        setCoinData(coinData);
      });
  }, []);

  // const ct = { user };

  return (
    <div>
      <GlobalStyle />
      <Header user={user} setUser={setUser} coinData={coinData} />
      <MainContainer>
        <Routes>
          <Route
            path="/"
            element={<CoinTracker user={user} coinData={coinData} />}
          />
          <Route path="*" element={<NoRoute />} />
          <Route path="/forum" element={<Forum user={user} />} />
          <Route path="/login-required" element={<LoginRequired />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/coin/:id" element={<CoinData user={user} />} />
          <Route path="/forum/:coin" element={<Subforum user={user} />} />
          <Route
            path="/create-post/:title/:id"
            element={<CreatePost user={user} />}
          />
          <Route path="/posts/:id/" element={<Post user={user} />} />
          <Route
            path="/create-comment/:id/:title"
            element={<CreateComment postTitle user={user} />}
          />
          <Route path="/favorites" element={<Favorites user={user} />} />
          {/* <Route
            path="/edit-comment/:comment/:commentID/:postID"
            element={<EditComment user={user} />}
          /> */}
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
