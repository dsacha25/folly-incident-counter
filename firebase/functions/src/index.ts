import * as admin from "firebase-admin";

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// ==== INCIDENTS ==== //
const onNewIncident = require("./incidents/onNewIncident");
const onIncidentDeleted = require("./incidents/onIncidentDeleted");
const onIncidentUpdated = require("./incidents/onIncidentUpdated");

// ==== EXPORTS ==== //
exports.onNewIncident = onNewIncident.onNewIncident;
exports.onIncidentDeleted = onIncidentDeleted.onIncidentDeleted;
exports.onIncidentUpdated = onIncidentUpdated.onIncidentUpdated;
