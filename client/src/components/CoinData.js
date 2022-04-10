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

const Table = styled.table`
  &:tr {
    text-align: left;
  }

  &:td {
    border-top: none;
  }
`;

const upperCase = function (str) {
  const name = str.slice(0, 1).toUpperCase() + str.slice(1);
  return name;
};

function CoinData({ coin }) {
  console.log(coin);
  return (
    <CoinStyles>
      <Headline>
        <tr></tr>
        <Image src={coin[0]?.image} width="30px" /> {upperCase(coin[0]?.id)} (
        {coin[0]?.symbol.toUpperCase()})
      </Headline>
      <h3>
        ${coin[0]?.current_price.toLocaleString()}{" "}
        <span>
          {coin[0]?.price_change_percentage_24h.toFixed(1) > 0 ? "📈" : "📉"}
          {coin[0]?.price_change_percentage_24h.toFixed(1)}%
        </span>
      </h3>
      <br />
      <h4>Rank: {coin[0]?.market_cap_rank}</h4>

      <table>
        <tr>
          <td>24h High: ${coin[0]?.high_24h.toLocaleString()}</td>
          <td>24h Low: ${coin[0]?.low_24h.toLocaleString()}</td>
        </tr>
        <tr>
          <td>ATH: ${coin[0]?.ath.toLocaleString()}</td>
          <td>
            ATH % change: {coin[0]?.ath_change_percentage.toLocaleString()}%
          </td>
          <td>ATH date: {coin[0]?.ath_date.toLocaleString()}</td>
        </tr>
        <tr>
          <td>
            Price Change 24h: ${coin[0]?.price_change_24h.toLocaleString()}
          </td>
          <td>
            Price Change % 24h:{" "}
            {coin[0]?.price_change_percentage_24h.toLocaleString()}%
          </td>
        </tr>
        <tr>
          <td>Market Cap: ${coin[0]?.market_cap.toLocaleString()}</td>
          <td>
            Market Cap Change 24h: $
            {coin[0]?.market_cap_change_24h.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td>Total Supply: {coin[0]?.total_supply.toLocaleString()}</td>
          <td>
            Circulating Supply: {coin[0]?.circulating_supply.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td>Total Volume: {coin[0]?.total_volume.toLocaleString()}</td>
          <td>
            Fully diluted valuation:{" "}
            {coin[0]?.fully_diluted_valuation.toLocaleString()}
          </td>
        </tr>
      </table>
    </CoinStyles>
  );
}

export default CoinData;
