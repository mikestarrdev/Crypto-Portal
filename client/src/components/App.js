import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import Header from "./Header";
import Navbar from "./Navbar";
import CoinTracker from "./CoinTracker";
import CoinData from "./CoinData";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "./Footer";
import Forum from "./Forum";
import Subforum from "./Subforum";
// import Favorites from "./Favorites";
import CreatePost from "./CreatePost";
import Post from "./Post";
import CreateComment from "./CreateComment";
import NoRoute from "./NoRoute";
import LoginRequired from "./LoginRequired";

function App() {
  const [user, setUser] = useState("");
  const [coinData, setCoinData] = useState([]);

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
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    )
      .then((r) => r.json())
      .then((coinData) => {
        // console.log(coinData);
        setCoinData(coinData);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            <CoinTracker user={user} setUser={setUser} coinData={coinData} />
          }
        />
        <Route path="*" element={<NoRoute />} />
        <Route path="/forum" element={<Forum user={user} />} />
        <Route path="/login-required" element={<LoginRequired />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/coin/:id" element={<CoinData user={user} />} />
        <Route path="/forum/:coin" element={<Subforum user={user} />} />
        {/* <Route
            path="/favorites"
            element={
              <Favorites user={user} setUser={setUser} coinData={coinData} />
            }
          /> */}
        <Route
          path="/create-post/:title/:id"
          element={<CreatePost user={user} />}
        />
        <Route path="/posts/:id/" element={<Post user={user} />} />
        <Route
          path="/create-comment/:id/:title"
          element={<CreateComment postTitle user={user} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
