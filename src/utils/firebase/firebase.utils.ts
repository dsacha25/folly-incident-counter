import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";
import { DocumentReference, UserCredential } from "./types";

const firebaseConfig = {
	apiKey: "AIzaSyDwCDUGpjCwuPt5_ZGA2cno0mGs40VNWZg",
	authDomain: "folly-incident-app.firebaseapp.com",
	projectId: "folly-incident-app",
	storageBucket: "folly-incident-app.appspot.com",
	messagingSenderId: "1042990771164",
	appId: "1:1042990771164:web:cbfe02e4ecae3a03dc7d19",
	measurementId: "G-W3VG5NSKSP",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const functions = firebase.functions();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// EMAIL VAR
export const isEmailVerified = () => {
	return auth.currentUser?.emailVerified;
};

// CURRENT USER
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

// CREATE NEW USER DOCUMENT
export const createUserProfileDocument = async (
	userAuth: UserCredential,
	additionalData: object
): Promise<DocumentReference> => {
	const userRef: DocumentReference = firestore.doc(
		`customers/${userAuth.user?.uid}`
	);
	const snapshot = await userRef.get();

	if (!snapshot.exists && userAuth.user) {
		console.log("Create User: User Did not already exist.");
		const { photoURL, email } = userAuth.user;

		const createdAt = new Date();

		try {
			await userRef.set(
				{
					photoURL,
					email,
					createdAt,
					...additionalData,
				},
				{ merge: true }
			);
		} catch (err) {
			console.log("Error creating user: ", err.message);
		}
	}
	return userRef;
};

export default firebase;
