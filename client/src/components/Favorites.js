import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CoinTrackerRow from "./CoinTrackerRow";

const Container = styled.div`
  margin: 1rem;
`;

const Headline = styled.h4`
  margin-bottom: 1rem;
`;

const NoFavorites = styled.div`
  margin: 1rem;
  border: solid whitesmoke 1px;
  border-radius: 5px;
  text-align: center;
  padding: 2rem;
`;

const Span = styled.span`
  text-decoration: underline;
  color: #2e5077;

  &:hover {
    cursor: pointer;
  }
`;

function Favorites({ user, setUser, coinData }) {
  const [favorites, setFavorites] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  function populateFavorites() {
    const renderFavorites = coinData?.filter((coin) => {
      let userFavs = user?.favorites.map((favorite) => favorite?.token);
      return userFavs?.includes(coin.id);
    });
    setUserFavorites(renderFavorites);
  }

  useEffect(() => {
    fetch(`/users/${user?.id}`)
      .then((r) => r.json())
      .then((user) => {
        setFavorites(user?.favorites);
      });
    populateFavorites();
  }, [userFavorites]);

  const renderFavorites = userFavorites?.map((favorite) => {
    return (
      <CoinTrackerRow
        coin={favorite}
        user={user}
        setUser={setUser}
        key={uuidv4()}
      />
    );
  });

  let navigate = useNavigate();

  function handleNavBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <Container>
      {user.favorites?.length > 0 ? (
        <>
          <Headline>Your Favorites</Headline>
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
            <tbody>{renderFavorites}</tbody>
          </table>
        </>
      ) : (
        <>
          <NoFavorites>
            <p>You have no favorites to display!</p>
            <br />
            <p>
              <Span onClick={handleNavBack}>Go back</Span>
            </p>
          </NoFavorites>
        </>
      )}
    </Container>
  );
}

export default Favorites;
