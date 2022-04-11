import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  margin-left: 1em;
`;

function Search() {
  const [search, setSearch] = useState("");
  const [fullCoinData, setFullCoinData] = useState({});

  function handleSearch(e) {
    e.preventDefault();

    fetch(
      `https://api.coingecko.com/api/v3/coins/${search}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
      .then((r) => r.json())
      .then((fullCoinData) => {
        console.log(fullCoinData);
        setFullCoinData(fullCoinData);
      });
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <SearchBar
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="🔎  Search..."
        />
        {/* <input type="submit" value="search" /> */}
      </form>
    </div>
  );
}

export default Search;
