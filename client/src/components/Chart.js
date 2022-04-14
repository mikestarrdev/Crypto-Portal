import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "rechartjs";

const ChartContainer = styled.div`
  margin: 1rem;
  border: solid black 1px;
`;

const Title = styled.h3`
  text-align: center;
  margin: 1rem;
`;

function Chart({ coin }) {
  const [data, setData] = useState([]);
  const [days, setDays] = useState("7");
  const [interval, setInterval] = useState("daily");

  console.log(coin);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [days, interval]);

  console.log(data);
  // const renderLineChart = (
  //   <LineChart width={600} height={300} data={data}>
  //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //     <CartesianGrid stroke="#ccc" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //   </LineChart>
  // );

  return (
    <ChartContainer>
      <Title>Chart</Title>
    </ChartContainer>
  );
}

export default Chart;
