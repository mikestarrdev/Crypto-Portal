import React from "react";
import styled from "styled-components";

function Footer() {
  const Footer = styled.footer`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: whitesmoke;
    margin: auto;
    margin-top: 1rem;
    padding: 3rem;
    border-top: 1px solid lightgray;
  `;
  return (
    <Footer>
      <a
        href="https://github.com/personnamedmike"
        target="_blank"
        rel="noreferrer"
      >
        Github - PersonNamedMike
      </a>
    </Footer>
  );
}

export default Footer;
