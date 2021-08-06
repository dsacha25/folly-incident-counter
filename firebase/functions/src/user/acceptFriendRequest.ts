import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const acceptFriendRequest = functions.https.onCall(
	async (data, context) => {
		if (!context.auth) {
			throw new functions.https.HttpsError(
				"failed-precondition",
				"The function must be called while authenticated."
			);
		}

		// ACCEPT
		const uid = context.auth.uid;
		const { user_uid } = data;

		const pendingDoc = await firestore
			.collection(`users/${user_uid}/pending_requests`)
			.where("user_uid", "==", uid)
			.get();

		functions.logger.info("Pending: ", pendingDoc.docs);

		const req_uid = pendingDoc.docs[0].id;

		await firestore
			.doc(`users/${user_uid}/pending_requests/${req_uid}`)
			.delete();

		await firestore.doc(`users/${uid}/requests/${req_uid}`).delete();

		const friendship = {
			users: [uid, user_uid],
			createdAt: new Date(),
		};

		await firestore.collection("friendships").add(friendship);
	}
);
