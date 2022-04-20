import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CoinTrackerRow from "./CoinTrackerRow";

const Container = styled.div`
  margin: 1rem;
  width: 100%;
  overflow: scroll;
  border: solid whitesmoke 1px;
`;

const SearchBar = styled.input`
  border-radius: 5px;
  margin-left: 1em;
  width: fit-content;
`;

function CoinTracker({ user, setUser, coinData }) {
  const [search, setSearch] = useState("");

  const searchResults = coinData.filter(
    (coin) =>
      coin.symbol?.includes(search.toLowerCase()) ||
      coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const coinTable = searchResults?.map((coin) => {
    return (
      <CoinTrackerRow
        coin={coin}
        user={user}
        setUser={setUser}
        key={uuidv4()}
      />
    );
  });

  return (
    <>
      <form>
        <SearchBar
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="🔎  Search Top 100..."
        />
      </form>
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
