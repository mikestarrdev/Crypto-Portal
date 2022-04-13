import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SubforumContainer = styled.div`
  background: white;
`;

function Subforum({ coin, user }) {
  return (
    <SubforumContainer>
      <h1>{coin} Forum</h1>
    </SubforumContainer>
  );
}

export default Subforum;
