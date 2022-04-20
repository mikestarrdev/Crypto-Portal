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

function CoinTrackerRow({ coin, user, setUser }) {
  const [tokenID, setTokenID] = useState(null);

  let navigate = useNavigate();

  useEffect(searchFavorites, [user?.favorites, coin.id]);

  // check if token is in User favorites
  function searchFavorites() {
    const findToken = user?.favorites?.find(
      (favorite) => favorite.token === coin.id
    );
    setTokenID(findToken);
  }

  function handleCreateFavorite() {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, token: coin.id }),
    })
      .then((r) => r.json())
      .then((favorite) => {
        // console.log(favorite);
        let favorites = [...user.favorites, favorite];
        user.favorites = favorites;
        setUser(user);
        setTokenID((favorite) => setTokenID);
      });
  }

  function handleDeleteFavorite() {
    fetch(`/favorites/${tokenID.id}`, {
      method: "DELETE",
    });
    setTokenID(false);
  }

  function renderCoinDataPage(e) {
    e.preventDefault();
    navigate(`/coin/${coin.id}`);
  }

  function handleLoginRequired(e) {
    e.preventDefault();
    navigate("/login-required");
  }

  return (
    <>
      <TableRow coin={coin}>
        {user ? (
          <td
            onClick={!tokenID ? handleCreateFavorite : handleDeleteFavorite}
            style={{ cursor: "pointer" }}
          >
            {!tokenID ? "☆" : "⭐️"}
          </td>
        ) : (
          <td onClick={handleLoginRequired} style={{ cursor: "pointer" }}>
            ☆
          </td>
        )}
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
