import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CoinTrackerRow from "./CoinTrackerRow";
import CoinChart from "./CoinChart";

function CoinTracker({ user }) {
  const [coinData, setCoinData] = useState([]);
  const [searched, setSearched] = useState("");

  const CoinTrackerTable = styled.table`
    grid-column-start: 1;
    margin: auto;
  `;

  const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const StyledCells = styled.td`
    text-align: left;
  `;

  const TableRow = styled.tr`
    &:hover {
      background: yellow;
    }
  `;

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

  const coinTable = coinData.map((coin) => {
    return (
      <CoinTrackerRow
        user={user}
        key={uuidv4()}
        rank={coin.market_cap_rank}
        image={coin.image}
        symbol={coin.symbol}
        currentPrice={coin.current_price}
        high24h={coin.high_24h}
        low24h={coin.low_24h}
        priceChange24h={coin.price_change_percentage_24h}
        mktCap={coin.market_cap}
      />
    );
  });

  return (
    <div>
      <h3>Cryptocurrency Prices By Marketcap</h3>
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
      {/* <CoinChart /> */}
    </div>
  );
}

export default CoinTracker;
