import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Search from "./Search";
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
  padding: 0 0 1rem 0;

  & a:active {
    text-decoration: underline;
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
  font-size: smaller;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
`;

function Navbar({ user, setUser, onLogout }) {
  return (
    <Nav>
      <NavBox>
        <NavLink to="/">Home</NavLink>
      </NavBox>
      <NavBox>
        {user ? (
          <NavLink to="/favorites" element={<Favorites user={user} />}>
            Favorites
          </NavLink>
        ) : (
          <NavLink to="/login-required" element={<LoginRequired />}>
            Favorites
          </NavLink>
        )}
      </NavBox>
      <NavBox>
        {user ? (
          <>
            <NavBox>
              <NavLink to="/forum" element={<Forum user={user} />}>
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
      {/*
        <NavLink to="/forum" element={<Forum user={user} />}>
          // Forums //{" "}
        </NavLink>
      </NavBox> */}
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
            <NavLink to="/login" element={<Login setUser={setUser} />}>
              Login
            </NavLink>
          </NavBox>
        </>
      )}
      <NavBox>{!user ? <NavLink to="/signup">Signup</NavLink> : null}</NavBox>
      {/* <NavBoxSearch>
        <Search />
      </NavBoxSearch> */}
    </Nav>
  );
}

export default Navbar;
