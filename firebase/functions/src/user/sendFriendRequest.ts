import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const sendFriendRequest = functions.https.onCall(
	async (data, context) => {
		if (!context.auth) {
			throw new functions.https.HttpsError(
				"failed-precondition",
				"The function must be called while authenticated."
			);
		}

		// SEND FRIEND REQUEST
		const uid = context.auth.uid;
		const { user_uid } = data;

		let username: string = "";
		let req_uid: string = "";

		await firestore.doc(`users/${uid}`).onSnapshot((snapshot) => {
			if (!snapshot.exists) return;

			username = snapshot.data()?.displayName;
		});

		if (!user_uid) {
			functions.logger.error("No user UID found.");
			return;
		}

		await firestore
			.collection(`users/${uid}/pending_requests`)
			.add({ user_uid })
			.then((snapshot) => {
				req_uid = snapshot.id;
			});

		await firestore
			.collection(`users/${user_uid}/requests`)
			.doc(req_uid)
			.create({ uid, username });
	}
);
