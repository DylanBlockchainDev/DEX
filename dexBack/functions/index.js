// OG CODE HERE
// const functions = require("firebase-functions");
// const expressApp = require("../index"); // Adjust the path to where your Express app is exported

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.app = functions.https.onRequest(expressApp);

const functions = require("firebase-functions");
const app = require("../index"); // Adjust the path to where your Express app is exported

// Get the moralisKey from Firebase Functions' environment
const moralisKey = functions.config().moralis.key;

// Initialize Moralis with the moralisKey
app.initializeMoralis(moralisKey);

// Export the app as a Cloud Function
exports.app = functions.https.onRequest(app);
