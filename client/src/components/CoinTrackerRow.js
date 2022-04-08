import react, { useState } from "react";
import styled from "styled-components";

function CoinTrackerRow({
  rank,

  image,
  symbol,
  currentPrice,
  high24h,
  low24h,
  priceChange24h,
  mktCap,
}) {
  const [favorited, setFavorited] = useState(false);

  const TableRow = styled.tr`
    &:hover {
      background: yellow;
    }
  `;
  const StyledCells = styled.td`
    text-align: left;
  `;

  function handleFavorite(e) {
    e.preventDefault();
  }

  return (
    <TableRow>
      <td onClick={handleFavorite}>{!favorited ? "☆" : "⭐️"}</td>
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
