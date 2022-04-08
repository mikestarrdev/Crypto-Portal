import react, { useState } from "react";
import styled from "styled-components";

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
  console.log(symbol, image, rank);
  const [favorited, setFavorited] = useState(false);

  const TableRow = styled.tr`
    &:hover {
      background: lightyellow;
    }
  `;
  const StyledCells = styled.td`
    text-align: left;
  `;

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
        setFavorited(true);
      });
  }

  function handleDeleteFavorite() {
    fetch("/favorites", {
      method: "DELETE",
    }).then((r) => {
      r.json();
      setFavorited(false);
    });
  }

  return (
    <TableRow>
      <td onClick={!favorited ? handleCreateFavorite : handleDeleteFavorite}>
        {!favorited ? "☆" : "⭐️"}
      </td>
      <td>{rank}</td>
      <StyledCells>
        <img src={image} width="20em" /> {symbol.toUpperCase()}
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
