import { select } from "redux-saga/effects";
import { selectUID } from "../../redux/user/user.selector";
import { auth, firestore, storage } from "./firebase.utils";

function* uploadPhotoToFirebase(
	path: string,
	photo: Blob | Uint8Array | ArrayBuffer
): Generator {
	const user = auth.currentUser;
	const uid = yield select(selectUID);

	yield storage
		.ref()
		.child(path)
		.put(photo)
		.then(async ({ ref }) => {
			const url = await ref.getDownloadURL();

			if (url && user) {
				await user
					.updateProfile({ photoURL: url })
					.catch((err) =>
						console.log("Unable to update photoUrl: ", err.message)
					);

				await firestore
					.doc(`users/${uid}`)
					.set({ photoURL: url }, { merge: true });
			}
		});
}

export default uploadPhotoToFirebase;
