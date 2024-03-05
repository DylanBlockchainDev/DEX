const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const app = express();
const app = require("../index.js"); // Import the Express app

// app.use(cors());

// Import your Express app setup here
// require("../index.js");

exports.app = functions.https.onRequest(app);
