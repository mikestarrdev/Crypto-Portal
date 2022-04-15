import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Search from "./Search";
import Forum from "./Forum";
import Favorites from "./Favorites";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  background-color: whitesmoke;

  & a:active {
    text-decoration: underline;
    /* padding: 1em; */
  }
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: smaller;
  font-weight: bold;
  text-decoration: underline;
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
        ) : null}
      </NavBox>
      <NavBox>
        <NavLink to="/forum" element={<Forum user={user} />}>
          Forums
        </NavLink>
      </NavBox>
      {user ? (
        <NavBox>
          <Span>You're logged in, {user?.username}!</Span>
          <Logout setUser={setUser} />
        </NavBox>
      ) : (
        <NavLink to="/login" element={<Login setUser={setUser} />}>
          Login
        </NavLink>
      )}
      <NavBox>{!user ? <NavLink to="/signup">Signup</NavLink> : null}</NavBox>
      {/* <NavBoxSearch>
        <Search />
      </NavBoxSearch> */}
    </Nav>
  );
}

export default Navbar;
