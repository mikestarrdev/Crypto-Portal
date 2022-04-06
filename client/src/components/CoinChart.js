import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  font-weight: bold;
`;

function CoinChart() {
  const [coinChart, setCoinChart] = useState([]);
  return (
    <div>
      <Title>Chart</Title>
    </div>
  );
}

export default CoinChart;
