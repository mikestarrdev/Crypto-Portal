import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Span = styled.span`
  color: gray;
  cursor: pointer;
`;

function Logout({ setUser }) {
  let navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("user logged out");
        setUser(null);
        navigate("/login");
      }
    });
  }

  return (
    <div>
      <Span onClick={handleLogout}>logout</Span>
    </div>
  );
}

export default Logout;
