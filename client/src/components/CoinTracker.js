import React, { useState, useEffect } from "react";
import CoinChart from "./CoinChart";

function CoinTracker() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((r) => r.json())
        .then((coinData) => {
          console.log(coinData);
          setCoinData(coinData);
        });
    }
  }, []);

  return (
    <div>
      <CoinChart />
    </div>
  );
}

export default CoinTracker;
