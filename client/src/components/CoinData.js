import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";

const CoinDataStyles = styled.div`
  margin: auto;
  width: 95%;
  padding: 0 1rem;
  margin-top: 3rem;
  /* border-top: 1px solid red; */
  text-align: left;
`;

const Headline = styled.h1`
  display: flex;
  align-items: center;
  text-align: justify;
  margin: 0;
  margin-bottom: 0.5em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Table = styled.table`
  text-align: left;
  /* border: 1px solid lightgray; */
`;

const CellNoBorder = styled.td`
  border-top: none;
`;

const Image = styled.img`
  align-items: center;
  margin-right: 0.25em;
`;

const Button = styled.button`
  background-color: whitesmoke;
  color: black;
  border: solid lightgray 1px;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
`;

const ForumNavigation = styled.h3`
  color: #2e5077;
  background: lightyellow;
  border: solid lightgray 1px;
  border-radius: 5px;
  width: fit-content;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
`;

const DateSpan = styled.span`
  font-size: x-small;
`;

function CoinData({ user }) {
  const [fullCoinData, setFullCoinData] = useState({});

  // console.log(sessions.useParams);

  let coin = useParams();

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
      .then((r) => r.json())
      .then((fullCoinData) => {
        setFullCoinData(fullCoinData);
      });
  }, [coin]);

  function parsedDate(date) {
    let pdate = new Date(date);
    let month = pdate.getMonth();
    let day = pdate.getDate();
    let year = pdate.getFullYear();
    let hours = pdate.getHours();
    let minutes = pdate.getMinutes();
    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
      default:
        break;
    }
    return `${month}-${day}-${year}, ${
      hours > 12 ? hours - 12 : hours
    }:${minutes} ${hours < 12 ? "am" : "pm"}`;
  }

  let navigate = useNavigate();

  function handleNavToSubforum(e) {
    e.preventDefault();
    navigate(`/forum/${fullCoinData.name}`);
  }

  function handleLoginRequired(e) {
    e.preventDefault();
    navigate("/login-required");
  }

  return (
    <CoinDataStyles>
      <Headline>
        <Image src={fullCoinData.image?.small} width="40px" />
        {fullCoinData?.name} ({fullCoinData?.symbol?.toUpperCase()})
      </Headline>
      <h3>
        ${fullCoinData?.market_data?.current_price.usd?.toLocaleString()}{" "}
        <span>
          {fullCoinData?.market_data?.price_change_percentage_24h?.toFixed(1) >
          0
            ? "📈"
            : "📉"}{" "}
          {fullCoinData?.market_data?.price_change_percentage_24h?.toFixed(1)}%
        </span>
      </h3>
      <br />
      <p>Rank: {fullCoinData?.market_data?.market_cap_rank}</p>
      <br />
      <p>
        <Button>
          <a
            href={fullCoinData.links?.homepage[0]}
            target="_blank"
            rel="noreferrer"
          >
            {fullCoinData.links?.homepage[0]}
          </a>
        </Button>
      </p>

      <Button>
        <a
          href={fullCoinData.links?.repos_url?.github[0]}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../github-logo.png"
            style={{ width: "15px" }}
            alt="Github"
          />{" "}
          GitHub
        </a>
      </Button>
      <Table>
        <tbody>
          <tr>
            <CellNoBorder>
              24h High: $
              {fullCoinData?.market_data?.high_24h.usd?.toLocaleString()}
            </CellNoBorder>
            <CellNoBorder>
              24h Low: $
              {fullCoinData?.market_data?.low_24h.usd?.toLocaleString()}
            </CellNoBorder>
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
              ATH: ${fullCoinData?.market_data?.ath.usd?.toLocaleString()}
              <br />{" "}
              <DateSpan>
                (
                {parsedDate(
                  fullCoinData?.market_data?.ath_date?.usd?.toLocaleString()
                )}
                )
              </DateSpan>
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
        <tfoot>
          <tr>
            <CellNoBorder>
              <DateSpan style={{ fontStyle: "italic", fontSize: "small" }}>
                Last Updated: {parsedDate(fullCoinData?.last_updated)}
              </DateSpan>
            </CellNoBorder>
          </tr>
        </tfoot>
      </Table>
      <br />
      <Chart coin={fullCoinData} />
      <br />
      {user ? (
        <ForumNavigation onClick={handleNavToSubforum}>
          Visit {fullCoinData?.name} Forum
        </ForumNavigation>
      ) : (
        <ForumNavigation onClick={handleLoginRequired}>
          Visit {fullCoinData?.name} Forum
        </ForumNavigation>
      )}
    </CoinDataStyles>
  );
}

export default CoinData;
