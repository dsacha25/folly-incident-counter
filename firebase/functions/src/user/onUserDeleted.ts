import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const firestore = admin.firestore();

export const onUserDeleted = functions.firestore
	.document("users/{uid}")
	.onDelete(async (snapshot, context) => {
		const uid = context.params.uid;

		/// DELETE

		const friendshipsRef = await firestore
			.collection("friendships")
			.where(
				new admin.firestore.FieldPath("user", "user_uid"),
				"array-contains",
				uid
			)
			.get();

		const friend_doc_uids: string[] = friendshipsRef.docs.map((doc) => doc.id);

		for (const friend_uid of friend_doc_uids) {
			await firestore.doc(`friendships/${friend_uid}`).delete();
		}
	});
