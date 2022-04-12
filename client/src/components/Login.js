import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const LoginStyles = styled.div`
  display: grid;
  grid-template-columns: 5;
  border: solid 1px gray;
  margin: auto;
  margin-top: 3rem;
  padding: 1em;
  width: 60%;
  background: rgb(240 240 240);
  border-radius: 5px;
  text-align: center;
`;

const Form = styled.form`
  text-align: center;
`;

const Button = styled.input`
  border: 0;
  border-radius: 0.25rem;
  background: orange;
  color: white;
  font-family: -system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
`;

function Login({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <LoginStyles>
      {user ? navigate("/") : null}
      <Form onSubmit={handleSubmit}>
        <h2>Welcome! Log In</h2>

        <label>
          Username:
          <input
            type="text"
            value={username}
            // required={true}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            // required={true}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </label>
        <br />
        <Button type="submit" value="Login" />
      </Form>
      <br />
      <p>
        {`Don't have an account?`} {<Link to="/signup">Signup!</Link>}{" "}
      </p>
    </LoginStyles>
  );
}

export default Login;
