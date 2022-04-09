import React from "react";
import styled from "styled-components";

const CoinStyles = styled.div`
  margin: auto;
  padding: 1rem;
  margin-top: 3rem;
  border-top: 1px solid red;
`;

const Headline = styled.h1`
  text-align: left;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Image = styled.img`
  align-items: center;
`;

function CoinData({ coin }) {
  return (
    <CoinStyles>
      <Headline>
        <Image src={coin[0]?.image} width="30px" /> {coin[0]?.name}{" "}
        {coin[0]?.symbol.toUpperCase()}
      </Headline>
      <p>${coin[0]?.current_price.toLocaleString()}</p>
    </CoinStyles>
  );
}

export default CoinData;
