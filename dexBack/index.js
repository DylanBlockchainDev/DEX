const express = require("express");
const app = express();
const Moralis = require("moralis").default;
const cors = require("cors");

app.use(cors());

require("dotenv").config();
// const port = 3001;

app.use(express.json());

app.get("/tokenPrice", async (req, res) => {
  const { query } = req;

  const responesOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne,
  });

  const responesTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo,
  });

  const usdPrices = {
    tokenOne: responesOne.raw.usdPrice,
    tokenTwo: responesTwo.raw.usdPrice,
    ratio: responesOne.raw.usdPrice / responesTwo.raw.usdPrice,
  };

  return res.status(200).json(usdPrices);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  console.log(`Moralis initialized`);
});

module.exports = app;
