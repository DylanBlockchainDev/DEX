import React, { useState, useEffect } from "react";
import axios from "axios";

function Tokens() {
  const [tokenData, setTokenData] = useState([]);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        setTokenData(response.data);
      } catch (error) {
        console.error("Failed to fetch token data:", error);
      }
    };

    fetchTokenData();
  }, []);

  const tokensContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "100px",
    padding: "20px",
  };

  const tokenStyle = {
    display: "flex",
    alignItems: "center",
    margin: "30px",
    padding: "20px",
    paddingLeft: "30px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0   4px   8px rgba(0,0,0,0.1)",
    flexBasis: "300px",
  };

  const tokenImageStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  return (
    <div>
      <h2>Tokens</h2>
      <div style={tokensContainerStyle}>
        {tokenData.map((token, index) => (
          <div key={index} style={tokenStyle}>
            <img src={token.image} alt={token.name} style={tokenImageStyle} />
            <div>
              <h3>{token.name}</h3>
              <p>Price: ${token.current_price}</p>
              <p>Market Cap: ${token.market_cap}</p>
              <p>Volume: ${token.total_volume}</p>
              <p>24h Change: {token.price_change_percentage_24h}%</p>
              {token.tickers && (
                <p>
                  Trading Pairs:{" "}
                  {token.tickers.map((ticker) => ticker.market).join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokens;
