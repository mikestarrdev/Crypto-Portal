import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  &:hover {
    background: lightyellow;
  }
`;
const StyledCells = styled.td`
  text-align: left;
`;

function CoinTrackerRow({
  user,
  rank,
  image,
  symbol,
  currentPrice,
  high24h,
  low24h,
  priceChange24h,
  mktCap,
}) {
  const [tokenID, setTokenID] = useState(null);

  useEffect(searchFavorites, [user.favorites]);

  // check if token is in User favorites
  function searchFavorites() {
    const findToken = user.favorites?.find(
      (favorite) => favorite.token === symbol
    );
    setTokenID(findToken);
  }

  function handleCreateFavorite() {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, token: symbol }),
    })
      .then((r) => r.json())
      .then((favorite) => {
        console.log(favorite);
        setTokenID(favorite);
      });
  }

  function handleDeleteFavorite() {
    fetch(`/favorites/${tokenID.id}`, {
      method: "DELETE",
    }).then((r) => {
      r.json();
      setTokenID(false);
    });
  }

  return (
    <TableRow>
      <td
        onClick={
          !tokenID || !tokenID.hasOwnProperty("error")
            ? handleCreateFavorite
            : handleDeleteFavorite
        }
      >
        {!tokenID ? "☆" : "⭐️"}
      </td>
      <td>{rank}</td>
      <StyledCells>
        <img src={image} alt={symbol + " logo"} width="20em" />{" "}
        {symbol.toUpperCase()}
      </StyledCells>
      <td>${currentPrice.toLocaleString()}</td>
      <td>{high24h.toLocaleString()}</td>
      <td>{low24h.toLocaleString()}</td>
      <td>{priceChange24h.toLocaleString()}%</td>
      <td>${mktCap.toLocaleString()}</td>
    </TableRow>
  );
}

export default CoinTrackerRow;
