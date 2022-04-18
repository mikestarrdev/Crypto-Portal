import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Forum from "./Forum";
import Favorites from "./Favorites";
import LoginRequired from "./LoginRequired";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  width: auto;
  background-color: whitesmoke;
  padding: 0.25rem 0rem;
  margin-top: 1.5rem;

  & a:active {
    text-decoration: underline;
    color: #2e5077;
    /* padding: 1em; */
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
  /* font-weight: bold; */
  text-align: center;
`;

function Navbar({ user, setUser, onLogout }) {
  // NavLink styles
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  let activeClassName = "underline";

  return (
    <Nav>
      <NavBox>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </NavBox>
      {/* <NavBox>
        {user ? (
          <NavLink to="/favorites" element={<Favorites user={user} />}>
            Favorites
          </NavLink>
        ) : (
          <NavLink to="/login-required" element={<LoginRequired />}>
            Favorites
          </NavLink>
        )}
      </NavBox> */}
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
            <Span>You're logged in, {user?.username}!</Span>
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
