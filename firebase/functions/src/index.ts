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

// ==== USERS ==== //
const updateUserPhotoReferences = require("./user/updateUserPhotoReferences");
const sendFriendRequest = require("./user/sendFriendRequest");
const declineFriendRequest = require("./user/declineFriendRequest");
const acceptFriendRequest = require("./user/acceptFriendRequest");
const removeFriend = require("./user/removeFriend");

// ==== EXPORTS ==== //
exports.onNewIncident = onNewIncident.onNewIncident;
exports.onIncidentDeleted = onIncidentDeleted.onIncidentDeleted;
exports.onIncidentUpdated = onIncidentUpdated.onIncidentUpdated;

exports.updateUserPhotoReferences =
	updateUserPhotoReferences.updateUserPhotoReferences;
exports.sendFriendRequest = sendFriendRequest.sendFriendRequest;
exports.declineFriendRequest = declineFriendRequest.declineFriendRequest;
exports.acceptFriendRequest = acceptFriendRequest.acceptFriendRequest;
exports.removeFriend = removeFriend.removeFriend;
