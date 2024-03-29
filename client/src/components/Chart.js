import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: auto;
  height: auto;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: whitesmoke;
  color: black;
  margin: 0.5rem 1rem;
  border: solid 1px lightgray;
  cursor: pointer;
`;

const Title = styled.h3`
  text-align: left;
  margin: 1rem;
`;

function Chart({ coin }) {
  // const [data, setData] = useState([]);
  const [days, setDays] = useState("7");
  const [priceChart, setPriceChart] = useState([]);

  let interval;

  if (days === "1") {
    interval = "hourly";
  } else {
    interval = "daily";
  }

  function renderPriceChart(data) {
    let prices = data.prices?.map((price) => {
      if (interval === "daily") {
        return { date: parsedDate(price[0]), price: price[1]?.toFixed(2) };
      } else if (interval === "hourly") {
        return { date: parsedHour(price[0]), price: price[1] };
      }
    });
    setPriceChart(prices);
  }

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin?.id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
    )
      .then((r) => r.json())
      .then((data) => {
        // setData(data);
        renderPriceChart(data);
      });
  }, [coin, days, interval, renderPriceChart]);

  const Form = (
    <form>
      <Dropdown value={days} onChange={(e) => setDays(e.target.value)}>
        <option value="1">24 hour</option>
        <option value="7">7 day</option>
        <option value="14">14 day</option>
        <option value="30">30 day</option>
        <option value="90">90 day</option>
        <option value="180">180 day</option>
        <option value="365">1 year</option>
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

  function parsedHour(date) {
    let pdate = new Date(date);
    let hour = pdate.getHours();
    return hour;
  }

  return (
    <>
      <ChartContainer>
        <Title>
          {coin?.name} prices - {days} day
        </Title>
        {Form}
        <br />

        <LineChart
          width={650}
          height={450}
          data={priceChart}
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
          <Line
            type="monotone"
            dataKey="price"
            stroke="#0079d3"
            activeDot={{ r: 8 }}
            fill="#D7E8BA"
          />
          {/* <Line type="monotone" dataKey="price" stroke="#0079d3" /> */}
        </LineChart>
      </ChartContainer>
    </>
  );
}

export default Chart;
