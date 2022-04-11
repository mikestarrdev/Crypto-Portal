import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <Form onSubmit={handleSubmit}>
      <h2>Welcome! Sign in here:</h2>
      <br />
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
      <input type="submit" value="Login" />
    </Form>
  );
}

export default Login;
