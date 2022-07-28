import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  width: auto;
  background: whitesmoke;
  background-image: linear-gradient(#ffa630, #d7e8ba);
  padding: 0.5rem;

  @media only screen and (max-width: 766px) {
    flex-direction: column;
    justify-content: left;
  }
`;

const H1 = styled.h1`
  display: flex;
  padding: 0 0.5rem;
`;

const Subhead = styled.span`
  align-items: end;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: medium;
  color: black;
  margin: 1rem;
  padding-bottom: 0.25rem;
  border-radius: 3px;
`;

function Header() {
  return (
    <HeaderComponent>
      <Link to="/">
        <H1>Crypto Portal</H1>
      </Link>
      <Subhead>Prices, Charts, Forums</Subhead>
    </HeaderComponent>
  );
}

export default Header;
