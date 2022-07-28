import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CoinTrackerRow from "./CoinTrackerRow";

const Container = styled.div`
  margin: 1rem 0;
  border: solid whitesmoke 1px;
  width: 100%;
  /* overflow-x: scroll; */
`;

const SearchBar = styled.input`
  border-radius: 5px;
  margin-left: 1em;
  width: fit-content;
`;

const Table = styled.table`
  /* table-layout: auto; */
  /* width: 100%; */
  /* overflow: scroll; */
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
          placeholder="🔎  Search..."
        />
      </form>
      <Container>
        <Table>
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
        </Table>
      </Container>
    </>
  );
}

export default CoinTracker;
