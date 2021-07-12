import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const onIncidentDeleted = functions.firestore
	.document("users/{uid}/incidents/{inc_uid}")
	.onDelete(async (snapshot, context) => {
		const { inc_uid } = context.params;

		return firestore.doc(`incidents/${inc_uid}`).delete();
	});
