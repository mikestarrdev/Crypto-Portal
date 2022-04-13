import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Search from "./Search";
import Forum from "./Forum";

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
  width: auto;
  padding: 1em;
  justify-content: center;
`;

// const NavBoxSearch = styled.div`
//   /* flex-grow: 4; */
//   justify-content: end;
// `;

function Navbar({ user, setUser, onLogout }) {
  return (
    <Nav>
      {/* <NavLink to="/">
        <h1>Crypto Portal</h1>
      </NavLink> */}
      <NavBox>
        <NavLink to="/">Home</NavLink>
      </NavBox>
      <NavBox>
        <NavLink to="/forum" element={<Forum user={user} />}>
          Forum
        </NavLink>
      </NavBox>
      <NavBox>
        {user ? (
          <Logout setUser={setUser} />
        ) : (
          <NavLink to="/login" element={<Login setUser={setUser} />}>
            Login
          </NavLink>
        )}
      </NavBox>
      <NavBox>{!user ? <NavLink to="/signup">Signup</NavLink> : null}</NavBox>
      {/* <NavBoxSearch>
        <Search />
      </NavBoxSearch> */}
      {user ? <NavBox>You're logged in, {user.username}!</NavBox> : null}
    </Nav>
  );
}

export default Navbar;
