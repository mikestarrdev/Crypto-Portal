import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = styled.div`
  /* display: grid; */
  /* grid-template-columns: 5; */
  border: solid 1px lightgray;
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
  margin: auto;
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
const UL = styled.ul`
  width: 80%;
  list-style-type: none;
  margin: auto;
`;

const ListItem = styled.li`
  align-items: center;
  background: white;
  text-align: center;
  margin: 1em;
  padding: 0.5em;
  border: solid red 1px;
  /* border-radius: 5px; */
`;

function Signup({ setUser }) {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [btcAddress, setBtcAddress] = useState("");
  const [ethAddress, setEthAddress] = useState("");

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    const response = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        btc_address: btcAddress,
        eth_address: ethAddress,
      }),
    });
    const user = await response.json();
    if (response.ok) {
      console.log("User created:", user);
      setUser(user);
      navigate("/");
    } else {
      setErrors(user.errors);
    }
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
            defaultValue={username}
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
            defaultValue={password}
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
            defaultValue={email}
            placeholder="email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        {/* <label>
          Enter BTC address:
          <br />
          <input
            type="text"
            defaultValue={btcAddress}
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
            defaultValue={ethAddress}
            placeholder="ETH address..."
            onChange={(e) => setEthAddress(e.target.value)}
          />
        </label> */}
        <br />
        <Button type="submit" value="Signup" />
      </SignupForm>
      {errors.length > 0 && (
        <UL style={{ color: "red" }}>
          {errors.map((error) => (
            <ListItem key={error}>{error}</ListItem>
          ))}
        </UL>
      )}
      <br />
      <p>
        {`Have an account already?`}{" "}
        {
          <Link to="/login">
            <span style={{ color: "#2E5077" }}>Login!</span>
          </Link>
        }{" "}
      </p>
    </SignupPage>
  );
}

export default Signup;
