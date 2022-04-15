import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CoinTrackerRow from "./CoinTrackerRow";

const Container = styled.div`
  margin: 1rem;
  border: solid lightgray 1px;
  overflow: scroll;
`;

function CoinTracker({ user }) {
  const [coinData, setCoinData] = useState([]);

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

  const coinTable = coinData.map((coin) => {
    return <CoinTrackerRow coin={coin} user={user} key={uuidv4()} />;
  });

  return (
    <>
      <h4>Marketcap and Price Data</h4>
      <Container>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>Coin</th>
              <th>Price</th>
              <th>High 24h</th>
              <th>Low 24h</th>
              <th>Price Change 24h</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>{coinTable}</tbody>
        </table>
      </Container>
    </>
  );
}

export default CoinTracker;
