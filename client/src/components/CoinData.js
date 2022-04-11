import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CoinStyles = styled.div`
  margin: auto;
  padding: 1rem;
  margin-top: 3rem;
  /* border-top: 1px solid red; */
  text-align: left;
`;

const Headline = styled.h1`
  display: flex;
  align-items: center;
  text-align: justify;
  margin: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Image = styled.img`
  align-items: center;
  margin-right: 0.25em;
`;

const Website = styled.a`
  background: lightyellow;
  padding: 0.25em;
  text-decoration: none;
`;

const Table = styled.table`
  &:tr {
    text-align: left;
  }

  &:tr {
    border: none;
  }
`;

function CoinData({ coin }) {
  const [fullCoinData, setFullCoinData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
      .then((r) => r.json())
      .then((fullCoinData) => {
        // console.log(fullCoinData);
        setFullCoinData(fullCoinData);
      });
  }, [coin]);

  // console.log(fullCoinData);

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

  return (
    <CoinStyles>
      <Headline>
        <Image src={fullCoinData.image?.small} width="40px" />
        {fullCoinData?.name} ({fullCoinData?.symbol?.toUpperCase()})
      </Headline>
      <h3>
        ${fullCoinData?.market_data?.current_price.usd.toLocaleString()}{" "}
        <span>
          {fullCoinData?.market_data?.price_change_percentage_24h.toFixed(1) > 0
            ? "📈"
            : "📉"}
          {fullCoinData?.market_data?.price_change_percentage_24h.toFixed(1)}%
        </span>
      </h3>
      <br />
      <h4>Rank: {fullCoinData?.market_data?.market_cap_rank}</h4>
      <br />
      <p>
        Website:{" "}
        <Website>
          <a href={fullCoinData.links?.homepage[0]}>
            {fullCoinData.links?.homepage[0]}
          </a>
        </Website>
      </p>

      <table>
        <tbody>
          <tr>
            <td>
              24h High: $
              {fullCoinData?.market_data?.high_24h.usd.toLocaleString()}
            </td>
            <td>
              24h Low: $
              {fullCoinData?.market_data?.low_24h.usd.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td>
              Price Change 24h: $
              {fullCoinData?.market_data?.price_change_24h?.toLocaleString()}
            </td>
            <td>
              Price Change % 24h:{" "}
              {fullCoinData?.market_data?.price_change_percentage_24h?.toLocaleString()}
              %
            </td>
          </tr>
          <tr>
            <td>
              ATH: ${fullCoinData?.market_data?.ath.usd?.toLocaleString()} (
              {displayDate(
                fullCoinData?.market_data?.ath_date?.usd?.toLocaleString()
              )}
              )
            </td>
            <td>
              ATH % change:{" "}
              {fullCoinData?.market_data?.ath_change_percentage?.usd?.toLocaleString()}
              %
            </td>
          </tr>
          <tr>
            <td>
              Market Cap: $
              {fullCoinData?.market_data?.market_cap?.usd?.toLocaleString()}
            </td>
            <td>
              Market Cap Change 24h: $
              {fullCoinData?.market_data?.market_cap_change_24h?.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td>
              Total Supply:{" "}
              {fullCoinData?.market_data?.total_supply?.toLocaleString()}
            </td>
            <td>
              Circulating Supply:{" "}
              {fullCoinData?.market_data?.circulating_supply?.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td>
              Total Volume: $
              {fullCoinData?.market_data?.total_volume.usd?.toLocaleString()}
            </td>
            <td>
              Fully diluted valuation: $
              {fullCoinData?.market_data?.fully_diluted_valuation?.usd?.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </CoinStyles>
  );
}

export default CoinData;
