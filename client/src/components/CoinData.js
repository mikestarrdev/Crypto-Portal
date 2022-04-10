import React from "react";
import styled from "styled-components";

const CoinStyles = styled.div`
  margin: auto;
  padding: 1rem;
  margin-top: 3rem;
  border-top: 1px solid red;
`;

const Headline = styled.h1`
  text-align: left;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Image = styled.img`
  align-items: center;
`;

const Table = styled.table`
  &:tr {
    text-align: left;
  }

  &:td {
    border-top: none;
  }
`;

const upperCase = function (str) {
  let name = "";
  for (let i = 0; i <= str.length; i++) {
    if (i == 0) {
      str[i].toUpperCase();
    } else {
      name += str[i];
    }
    return name;
  }
};

function displayDate(oldDate) {
  const date = new Date(oldDate);
  const year = date.getFullYear();
  let month = date.getMonth();
  const day = date.getDay();
  switch (month) {
    case 1:
      month = "Jan";
    case 2:
      month = "Feb";
    case 3:
      month = "Mar";
    case 4:
      month = "Apr";
    case 5:
      month = "May";
    case 6:
      month = "Jun";
    case 7:
      month = "Jul";
    case 8:
      month = "Aug";
    case 9:
      month = "Sept";
    case 10:
      month = "Oct";
    case 11:
      month = "Nov";
    case 12:
      month = "Dec";
  }
  return `${month} ${day}, ${year}`;
}

function CoinData({ coin }) {
  console.log(coin);
  return (
    <CoinStyles>
      <Headline>
        <tr></tr>
        <Image src={coin[0]?.image} width="30px" /> {coin[0]?.id} (
        {coin[0]?.symbol.toUpperCase()})
      </Headline>
      <h3>
        ${coin[0]?.current_price.toLocaleString()}{" "}
        <span>
          {coin[0]?.price_change_percentage_24h.toFixed(1) > 0 ? "📈" : "📉"}
          {coin[0]?.price_change_percentage_24h.toFixed(1)}%
        </span>
      </h3>
      <br />
      <h4>Rank: {coin[0]?.market_cap_rank}</h4>

      <table>
        <tr>
          <td>24h High: ${coin[0]?.high_24h.toLocaleString()}</td>
          <td>24h Low: ${coin[0]?.low_24h.toLocaleString()}</td>
        </tr>

        <tr>
          <td>
            Price Change 24h: ${coin[0]?.price_change_24h.toLocaleString()}
          </td>
          <td>
            Price Change % 24h:{" "}
            {coin[0]?.price_change_percentage_24h.toLocaleString()}%
          </td>
        </tr>
        <tr>
          <td>
            ATH: ${coin[0]?.ath.toLocaleString()} (
            {displayDate(coin[0]?.ath_date.toLocaleString())})
          </td>
          <td>
            ATH % change: {coin[0]?.ath_change_percentage.toLocaleString()}%
          </td>
        </tr>
        {/* <tr>
          <td>
            ATL: ${coin[0]?.atl.toLocaleString()} (
            {displayDate(coin[0]?.atl_date.toLocaleString())})
          </td>
          <td>
            ATL % change: {coin[0]?.atl_change_percentage.toLocaleString()}%
          </td>
        </tr> */}
        <tr>
          <td>Market Cap: ${coin[0]?.market_cap.toLocaleString()}</td>
          <td>
            Market Cap Change 24h: $
            {coin[0]?.market_cap_change_24h.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td>Total Supply: {coin[0]?.total_supply.toLocaleString()}</td>
          <td>
            Circulating Supply: {coin[0]?.circulating_supply.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td>Total Volume: ${coin[0]?.total_volume.toLocaleString()}</td>
          <td>
            Fully diluted valuation: $
            {coin[0]?.fully_diluted_valuation.toLocaleString()}
          </td>
        </tr>
      </table>
    </CoinStyles>
  );
}

export default CoinData;
