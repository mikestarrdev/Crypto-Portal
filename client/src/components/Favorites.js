import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CoinTrackerRow from "./CoinTrackerRow";

const Container = styled.div`
  margin: 1rem;
`;

function Favorites({ user }) {
  const [favorites, setFavorites] = useState([]);

  const tokenList = user.favorites?.map((token) => token?.token);

  console.log(tokenList);

  useEffect(() => {
    tokenList?.map((token) => {
      return fetch(
        `https://api.coingecko.com/api/v3/coins/${token}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
        .then((r) => r.json())
        .then((token) => {
          const favList = [...favorites, token];
          setFavorites(favList);
        });
    });
  }, []);

  console.log(favorites);

  // const coinTable = favorites?.map((coin) => {
  //   return <CoinTrackerRow coin={coin} user={user} key={uuidv4()} />;
  // });

  return (
    <Container>
      <h4>Marketcap and Price Data</h4>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>High 24h</th>
            <th>Low 24h</th>
            <th>Price Change 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        {/* <tbody>{coinTable}</tbody> */}
      </table>
    </Container>
  );
}

export default Favorites;
