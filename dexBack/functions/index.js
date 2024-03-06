const functions = require("firebase-functions");
const expressApp = require("../index"); // Adjust the path to where your Express app is exported

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(expressApp);
