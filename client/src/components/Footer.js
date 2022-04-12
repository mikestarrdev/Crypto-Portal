import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: whitesmoke;
  margin: auto;
  margin-top: 5rem;
  padding: 5rem;
  border-top: 1px solid lightgray;
`;

function Footer() {
  return (
    <FooterStyle>
      <a
        href="https://github.com/personnamedMike"
        target="_blank"
        rel="noreferrer"
      >
        PersonNamedMike | GitHub
      </a>
    </FooterStyle>
  );
}

export default Footer;
