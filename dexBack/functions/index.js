const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Import your Express app setup here
require("../index.js");

exports.app = functions.https.onRequest(app);
