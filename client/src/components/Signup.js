import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPage = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  border: solid 1px black;
  margin: auto;
  padding: 1em;
  width: 80%;
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
    fetch("/users", {
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
    <LoginPage>
      <form onSubmit={handleSignup}>
        <label>
          Choose username:
          <br />
          <input
            type="text"
            htmlFor="text"
            value={username}
            required={true}
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
            required={true}
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
            required={true}
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
        <input type="submit" value="Signup" />
      </form>
    </LoginPage>
  );
}

export default Signup;
