import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CoinChart from "./CoinChart";

function CoinTracker() {
  const StyledCells = styled.td`
    text-align: left;
  `;

  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((r) => r.json())
        .then((coinData) => {
          console.log(coinData);
          setCoinData(coinData);
        });
    }
  }, []);

  const coinTable = coinData.map((coin, index) => {
    return (
      <tr key={uuidv4()}>
        <td>☆</td>
        <td>{coin.market_cap_rank}</td>
        <StyledCells>
          <img src={coin.image} width="15px" height="15px" />{" "}
          {coin.symbol.toUpperCase()}
        </StyledCells>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>${coin.high_24h.toLocaleString()}</td>
        <td>${coin.low_24h.toLocaleString()}</td>
        <td>{coin.price_change_percentage_24h.toLocaleString()} %</td>
        <td>${coin.market_cap.toLocaleString()}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <th>Watch</th>
          <th>Rank</th>
          <th>Coin</th>
          <th>Price</th>
          <th>High 24h</th>
          <th>Low 24h</th>
          <th>Price Change 24h</th>
          <th>Market Cap</th>
        </thead>
        <tbody>{coinTable}</tbody>
      </table>
      {/* <CoinChart /> */}
    </div>
  );
}

export default CoinTracker;
