import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Subhead = styled.span`
  font-family: "Ubuntu Mono", monospace;
  /* font-family: "Major Mono" */
  font-size: medium;
  font-weight: normal;
  background: #d7e8ba;

  color: black;
  padding: 0rem 0.2rem;
  border-radius: 3px;
`;

function Header({ user, setUser, coinData }) {
  return (
    <header>
      <Link to="/">
        <h1>
          Crypto Portal <Subhead>Prices, Charts, Forums</Subhead>
        </h1>
      </Link>
      <Navbar user={user} setUser={setUser} />
    </header>
  );
}

export default Header;
