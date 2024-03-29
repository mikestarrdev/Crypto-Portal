import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Forum from "./Forum";
import LoginRequired from "./LoginRequired";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: auto;
  background-color: whitesmoke;
  padding: 0.75rem 0.5rem;

  & a:active {
    text-decoration: underline;
    color: #2e5077;
  }
`;

const NavBox = styled.div`
  display: flex;
  flex-flow: wrap;
  width: auto;
  padding: 0.5rem 1rem;
  align-items: center;
`;

const Span = styled.span`
  font-size: normal;
  text-align: center;
`;

function Navbar({ user, setUser, onLogout }) {
  let activeStyle = {
    fontWeight: "bold",
  };

  return (
    <Nav>
      <NavBox>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Market Data
        </NavLink>
      </NavBox>
      <NavBox>
        {user ? (
          <>
            <NavBox>
              <NavLink
                to="/forum"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                element={<Forum user={user} />}
              >
                Forums
              </NavLink>
            </NavBox>
          </>
        ) : (
          <NavLink to="/login-required" element={<LoginRequired />}>
            Forum
          </NavLink>
        )}
      </NavBox>
      {user ? (
        <>
          <NavBox>
            <Span>Welcome, {user?.username}!</Span>
          </NavBox>
          <NavBox>
            <Logout setUser={setUser} />
          </NavBox>
        </>
      ) : (
        <>
          <NavBox>
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              element={<Login setUser={setUser} />}
            >
              Login
            </NavLink>
          </NavBox>
        </>
      )}
      <NavBox>
        {!user ? (
          <NavLink
            to="/signup"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Signup
          </NavLink>
        ) : null}
      </NavBox>
    </Nav>
  );
}

export default Navbar;
