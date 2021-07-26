import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const updateUserPhotoReferences = functions.https.onCall(
	async (data, context) => {
		if (!context.auth) {
			throw new functions.https.HttpsError(
				"failed-precondition",
				"The function must be called while authenticated."
			);
		}

		const uid = context.auth.uid;
		const user = await admin.auth().getUser(uid);

		const incidentDocs = await firestore
			.collection(`users/${uid}/incidents`)
			.get();

		for (const incident of incidentDocs.docs) {
			functions.logger.info("PHOTO URL: ", user.photoURL);
			await incident.ref.update({
				user: {
					photoURL: user.photoURL,
					username: user.displayName,
					user_uid: uid,
				},
			});
		}
	}
);
