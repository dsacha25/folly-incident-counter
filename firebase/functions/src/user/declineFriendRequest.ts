import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const declineFriendRequest = functions.https.onCall(
	async (data, context) => {
		if (!context.auth) {
			throw new functions.https.HttpsError(
				"failed-precondition",
				"The function must be called while authenticated."
			);
		}

		// DECLINE
		const uid = context.auth.uid;
		const { user_uid } = data;

		const pendingDoc = await firestore
			.collection(`users/${uid}/pending_requests`)
			.where("user_uid", "==", user_uid)
			.get();

		const req_uid = pendingDoc.docs[0].id;

		await firestore.doc(`users/${uid}/pending_requests/${req_uid}`).delete();
		await firestore.doc(`users/${user_uid}/requests/${req_uid}`).delete();
	}
);
