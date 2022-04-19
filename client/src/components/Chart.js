import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

const Dropdown = styled.select`
  padding: 0.35em;
  border-radius: 5px;
  background: whitesmoke;
  color: #0079d3;
`;

const Title = styled.h3`
  text-align: center;
  margin: 1rem;
`;

function Chart({ coin }) {
  const [data, setData] = useState([]);
  const [days, setDays] = useState("7 day");
  const [interval, setInterval] = useState("daily");
  // const [chartData, setChartData] = useState([]);

  // console.log(coin);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin?.id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
    )
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, [coin, days, interval]);

  let chartData = [
    {
      date: parsedDate(1649808000000),
      price: 3038.2,
      mktCap: 764314681923.3135,
    },
    {
      date: parsedDate(1649894400000),
      price: 3121.4,
      mktCap: 783560801481.9719,
    },
    {
      date: parsedDate(1649980800000),
      price: 3023.4,
      mktCap: 759703443634.6515,
    },
    {
      date: parsedDate(1650067200000),
      price: 3045.42,
      mktCap: 771666602547.5923,
    },
    {
      date: parsedDate(1650153600000),
      price: 3066.35,
      mktCap: 770439827829.2395,
    },
    {
      date: parsedDate(1650240000000),
      price: 2995.72,
      mktCap: 755627152747.4514,
    },
    {
      date: parsedDate(1650326400000),
      price: 3061.89,
      mktCap: 776463403746.4385,
    },
    {
      date: parsedDate(1650381271000),
      price: 3125.06,
      mktCap: 785765080047.437,
    },
  ];

  console.log(data);

  const Form = (
    <form>
      <Dropdown value={days} onChange={(e) => setDays(e.target.value)}>
        <option value="24 hour">24 hour</option>
        <option value="7 day">7 day</option>
        <option value="30 day">30 day</option>
        <option value="90 day">90 day</option>
        <option value="1 year">1 year</option>
      </Dropdown>{" "}
      <Dropdown value={interval} onChange={(e) => setInterval(e.target.value)}>
        <option value="daily">daily</option>
        <option value="hourly">hourly</option>
      </Dropdown>
    </form>
  );

  function parsedDate(date) {
    let pdate = new Date(date);
    let month = pdate.getMonth();
    let day = pdate.getDate();
    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }
    return `${month} ${day}`;
  }

  return (
    <>
      <ChartContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title>
          {coin?.name} Prices - {days}
        </Title>
        {Form}
        <br />

        <LineChart
          width={600}
          height={450}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#0079d3"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="price" stroke="#0079d3" /> */}
        </LineChart>
        <hr />
      </ChartContainer>
    </>
  );
}

export default Chart;
