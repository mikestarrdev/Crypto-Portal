import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Search from "./Search";

const Nav = styled.nav`
  display: flex;
  /* display: grid; */
  /* grid-template-columns: 20% 40% 60% 80% 100% */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;

  & a:active {
    text-decoration: underline;
    /* padding: 1em; */
  }
`;

const NavBox = styled.div`
  /* border: solid black 1px; */
  width: auto;
  padding: 1em;

  &:hover {
    background: lightyellow;
  }
`;

function Navbar({ user, setUser, onLogout }) {
  return (
    <Nav>
      <NavBox>
        <NavLink to="/">Home</NavLink>
      </NavBox>
      {/* <NavBox>
        <NavLink to="/favorites">Watch List</NavLink>
      </NavBox> */}
      {/* <NavBox>
        <NavLink to="/forum">Forum</NavLink>
      </NavBox> */}
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
      <NavBox>
        <Search />
      </NavBox>
    </Nav>
  );
}

export default Navbar;
