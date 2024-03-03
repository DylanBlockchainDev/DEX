const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Import your Express app setup here
require("../index.js");

exports.app = functions.https.onRequest(app);
