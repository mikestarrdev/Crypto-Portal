import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  border: solid black 1px;
  margin-left: 1em;
`;

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form>
        <SearchBar
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="🔎  Search..."
        />
      </form>
    </div>
  );
}

export default Search;
