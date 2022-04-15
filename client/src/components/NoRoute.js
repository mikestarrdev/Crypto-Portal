import react from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 1rem;
`;

const Button = styled.button`
  display: flex;
  margin: 2rem auto;
`;

function NoRoute() {
  let navigate = useNavigate();

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <Div>
      <h1>Whoops! Looks like this path doesn't exist!</h1>
      <Button onClick={goBack}>Go back!</Button>
    </Div>
  );
}

export default NoRoute;
