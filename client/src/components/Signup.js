import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = styled.div`
  /* display: grid; */
  /* grid-template-columns: 5; */
  border: solid 1px gray;
  margin: auto;
  margin-top: 3rem;
  padding: 1em;
  width: 60%;
  background: whitesmoke;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 3rem;
`;

const SignupForm = styled.form`
  /* grid-column-start: 2;
  grid-column-end: 5; */
  margin: auto;
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

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [btcAddress, setBtcAddress] = useState("");
  const [ethAddress, setEthAddress] = useState("");

  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        avatar_url: avatarURL,
        btc_address: btcAddress,
        eth_address: ethAddress,
      }),
    })
      .then((resp) => resp.json())
      .then((newUser) => console.log(newUser));
    navigate("/login");
  }

  return (
    <SignupPage>
      <SignupForm onSubmit={handleSignup}>
        <label>
          Choose username:
          <br />
          <input
            type="text"
            htmlFor="text"
            value={username}
            //
            placeholder="username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Choose password:
          <br />
          <input
            type="password"
            value={password}
            placeholder="password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Choose email:
          <br />
          <input
            type="text"
            value={email}
            placeholder="email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Upload avatar:
          <br />
          <input
            type="text"
            value={avatarURL}
            onChange={(e) => setAvatarURL(e.target.value)}
            placeholder="enter URL here..."
          />
        </label>
        <br />
        <label>
          Enter BTC address:
          <br />
          <input
            type="text"
            value={btcAddress}
            placeholder="BTC address..."
            onChange={(e) => setBtcAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enter ETH address:
          <br />
          <input
            type="text"
            value={ethAddress}
            placeholder="ETH address..."
            onChange={(e) => setEthAddress(e.target.value)}
          />
        </label>
        <br />
        <Button type="submit" value="Signup" />
      </SignupForm>
      <br />
      <p>
        {`Have an account already?`} {<Link to="/login">Login!</Link>}{" "}
      </p>
    </SignupPage>
  );
}

export default Signup;
