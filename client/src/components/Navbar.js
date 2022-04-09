import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";

const Nav = styled.nav`
  display: flex;
  /* display: grid; */
  /* grid-template-columns: 20% 40% 60% 80% 100% */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  /* padding: 1em; */

  & a:active {
    text-decoration: underline;
    /* padding: 1em; */
  }
`;

const NavBox = styled.div`
  border: solid black 1px;
  width: auto;
  padding: 1em;
`;

function Navbar({ onLogout }) {
  function openModal() {}

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Nav>
      <NavBox>
        <NavLink exact to="/">
          Home
        </NavLink>
      </NavBox>
      <NavBox>
        <NavLink to="/favorites">Watch List</NavLink>
      </NavBox>
      <NavBox>
        <NavLink to="/forum">Forum</NavLink>
      </NavBox>
      <NavBox>
        <NavLink to="/login" element={<Login />}>
          Login
        </NavLink>
      </NavBox>
      <NavBox>
        <NavLink to="/signup" element={<Signup />}>
          Signup
        </NavLink>
      </NavBox>
      <Search />
    </Nav>
  );
}

export default Navbar;
