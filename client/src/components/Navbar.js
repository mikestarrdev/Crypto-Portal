import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

function Navbar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/favorites">Watch List</NavLink> |{" "}
      <NavLink to="/forum">Forum</NavLink>
    </Nav>
  );
}

export default Navbar;
