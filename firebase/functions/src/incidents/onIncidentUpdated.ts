import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const onIncidentUpdated = functions.firestore
	.document("users/{uid}/incidents/{inc_uid}")
	.onUpdate(async (change, context) => {
		const before = change.before.data();
		const after = change.after.data();

		if (before === after || !after) return null;

		const { inc_uid } = context.params;

		return firestore.doc(`incidents/${inc_uid}`).update({ ...after });
	});
