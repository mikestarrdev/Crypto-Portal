import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const LoginStyles = styled.div`
  display: grid;
  grid-template-columns: 5;
  border: solid 1px lightgray;
  margin: auto;
  margin-top: 3rem;
  padding: 1em;
  width: 60%;
  background: whitesmoke;
  border-radius: 5px;
  text-align: center;
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.input`
  background: #2e5077;
  color: white;
  border: none;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  -ms-flex-pack: center;
  position: relative;
  cursor: pointer;
  width: fit-content;
  margin: auto;
`;

const ErrorMessage = styled.p`
  display: flex;
  width: 60%;
  background: white;
  color: red;
  justify-content: center;
  margin: 0 auto 1em auto;
  padding: 0.5em;
  border: solid 1px red;
  /* border-radius: 5px; */
`;

function Login({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const user = await response.json();
    if (response.ok) {
      console.log("Logged in:", user);
      setUser(user);
      navigate("/");
    } else {
      setErrors(user.error);
    }
  }
  // console.log(errors.login);
  return (
    <LoginStyles>
      {user ? navigate("/") : null}
      <Form onSubmit={handleSubmit}>
        <h2>Welcome! Log In</h2>
        <label>
          Username:
          <input
            type="text"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </label>
        <br />
        <Button type="submit" value="Login" />
      </Form>
      <br />
      {Object.values(errors).length > 0 ? (
        <ErrorMessage>{Object.values(errors)}</ErrorMessage>
      ) : null}
      <p>
        {`Don't have an account?`}{" "}
        {
          <Link to="/signup">
            <span style={{ color: "#2E5077" }}>Signup!</span>
          </Link>
        }{" "}
      </p>
    </LoginStyles>
  );
}

export default Login;
