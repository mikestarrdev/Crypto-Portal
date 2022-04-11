import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TableRow = styled.tr`
  &:hover {
    background: lightyellow;
  }
`;
const StyledCells = styled.td`
  text-align: left;

  &:hover {
    cursor: pointer;
  }
`;

function CoinTrackerRow({ coin, user }) {
  const [tokenID, setTokenID] = useState(null);

  let navigate = useNavigate();

  useEffect(searchFavorites, [user?.favorites]);

  // check if token is in User favorites
  function searchFavorites() {
    const findToken = user?.favorites?.find(
      (favorite) => favorite.token === coin.symbol
    );
    setTokenID(findToken);
  }

  function handleCreateFavorite() {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, token: coin.symbol }),
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

  // console.log(tokenID);

  function renderCoinDataPage(e) {
    e.preventDefault();
    navigate(`/${coin.id}`);
  }

  return (
    <>
      <TableRow coin={coin}>
        <td onClick={!tokenID ? handleCreateFavorite : handleDeleteFavorite}>
          {!tokenID ? "☆" : "⭐️"}
        </td>
        <td>{coin.market_cap_rank}</td>
        <StyledCells onClick={renderCoinDataPage}>
          <img src={coin.image} alt={coin.symbol + " logo"} width="20em" />{" "}
          {coin.symbol.toUpperCase()}
        </StyledCells>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>{coin.high_24h.toLocaleString()}</td>
        <td>{coin.low_24h.toLocaleString()}</td>
        <td>{coin.price_change_percentage_24h.toLocaleString()}%</td>
        <td>${coin.market_cap.toLocaleString()}</td>
      </TableRow>
    </>
  );
}

export default CoinTrackerRow;
