import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 1rem;
  border: solid lightgray 1px;
  border-radius: 5px;
  text-align: center;
  padding-bottom: 2rem;
`;

const Span = styled.span`
  text-decoration: underline;
  color: blue;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: flex;
  margin: 2rem auto;
`;

function LoginRequired() {
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <Div>
      <h2>You must be logged into view that page!</h2>
      <div>
        <p>
          <Span onClick={handleLogin}>Login</Span> |{" "}
          <Span onClick={handleSignup}>Signup</Span>
        </p>
      </div>
      {/* <Button onClick={goBack}>Go back!</Button> */}
    </Div>
  );
}

export default LoginRequired;
