import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const removeFriend = functions.https.onCall(async (data, context) => {
	if (!context.auth) {
		throw new functions.https.HttpsError(
			"failed-precondition",
			"The function must be called while authenticated."
		);
	}

	// REMOVE
	const uid = context.auth.uid;
	const { user_uid } = data;

	const friendshipRef = await firestore
		.collection("friendships")
		.where("users", "array-contains", [uid, user_uid])
		.get();

	const friendship_uid = friendshipRef.docs[0].id;

	await firestore.doc(`friendships/${friendship_uid}`).delete();
});
