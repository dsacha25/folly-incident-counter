import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const onNewIncident = functions.firestore
	.document("users/{uid}/incidents/{inc_uid}")
	.onCreate(async (snapshot, context) => {
		const { uid, inc_uid } = context.params;

		return firestore
			.doc(`incidents/${inc_uid}`)
			.create({ ...snapshot.data(), createdBy: uid, inc_uid });
	});
