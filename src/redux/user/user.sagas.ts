import {
	all,
	call,
	CallEffect,
	put,
	PutEffect,
	SagaReturnType,
	select,
	SelectEffect,
	takeLatest,
} from "redux-saga/effects";
import {
	auth,
	firestore,
	getCurrentUser,
	storage,
} from "../../utils/firebase/firebase.utils";
import {
	DocumentReference,
	DocumentSnapshot,
	Query,
	QueryDocumentSnapshot,
	QuerySnapshot,
	UserCredential,
} from "../../utils/firebase/types";

import {
	fetchFriendRequestsSuccess,
	fetchFriendsSuccess,
	fetchPendingFriendRequestsSuccess,
	searchUsersSuccess,
	setSearchPagination,
	setUserAuth,
	signInUserSuccess,
	signUpUserFailure,
	signUpUserSuccess,
} from "./user.action";

import UserTypes from "./user.types";

import {
	SearchUsersStartAction,
	SetProfilePictureAction,
	SignInStartAction,
	SignUpStartAction,
	SignUpSuccessAction,
} from "./action-types";
import { FriendRequestType, User, UserQueryResult } from "./types";
import { selectCurrentUser, selectUID } from "./user.selector";
import callFirebaseFunction from "../../utils/methods/call-firebase-function.method";
import { Profile } from "../profile/types";
import { filter, flatMap } from "lodash";
import getErrorMessage from "../../utils/methods/get-error-message.method";

/// CREATE USER IN FIREBASE
export function* createUserInFirebase({
	payload,
}: SignUpSuccessAction):
	| Generator<SagaReturnType<typeof firestore.doc>>
	| Promise<void> {
	try {
		const { user, additionalData } = payload;
		yield console.log("CREATE USER IN FIREBASE: ", user);

		if (!user) return;

		const userRef: DocumentReference = yield firestore.doc(`users/${user.uid}`);

		const snapshot: DocumentSnapshot = yield userRef.get();

		yield console.log("SNAPSHOT EXISTS: ", snapshot.exists);

		if (!snapshot.exists) {
			yield userRef.set({
				...additionalData,
				displayName: user.displayName,
				email: user.email,
			});
		}
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onUserSignUpSuccess() {
	yield takeLatest(UserTypes.SIGN_UP_USER_SUCCESS, createUserInFirebase);
}

/// EMAIL SIGN UP
export function* userEmailSignUp({ payload }: SignUpStartAction) {
	try {
		const { name, email, password } = payload;

		const { user }: UserCredential = yield auth.createUserWithEmailAndPassword(
			email,
			password
		);

		if (!user) return;

		yield user.updateProfile({ displayName: name });

		yield put(
			signUpUserSuccess({
				user,
				additionalData: { name, emailVerifySent: false },
			})
		);
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onUserSignUpEmail() {
	yield takeLatest(UserTypes.SIGN_UP_USER_START, userEmailSignUp);
}

/// EMAIL SIGN IN
export function* userSignInStart({ payload }: SignInStartAction) {
	try {
		const { email, password } = payload;
		yield console.log("LOGIN");

		const { user } = yield auth.signInWithEmailAndPassword(email, password);

		yield put(signInUserSuccess(user));
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onUserEmailSignIn() {
	yield takeLatest(UserTypes.SIGN_IN_USER_START, userSignInStart);
}

/// VERIFY SIGNED IN USER
export function* isUserAuthenticated():
	| Generator<Promise<unknown>>
	| PutEffect {
	try {
		const user: User = yield getCurrentUser();

		// if (!user) return;

		yield console.log("user: ", user);
		yield put(setUserAuth(user));
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

/// SIGN-OUT
export function* signOut() {
	yield auth.signOut();
}

export function* onUserSignOut() {
	yield takeLatest(UserTypes.SIGN_OUT_USER, signOut);
}

/// SET PROFILE PICTURE
export function* setUserProfilePicture({
	payload,
}: SetProfilePictureAction): Generator<
	SelectEffect | PutEffect | CallEffect | Promise<any>
> {
	try {
		if (!payload.upload) return null;

		const uid = yield select(selectUID);
		const path = `customers/${uid}/profilePicture_${uid}`;

		const user = auth.currentUser;

		// Update auth User
		yield storage
			.ref()
			.child(path)
			.put(payload.upload)
			.then(async ({ ref }) => {
				const url = await ref.getDownloadURL();

				console.log("DOWNLOAD RESULT: ", url);

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

		yield call(callFirebaseFunction, "updateUserPhotoReferences");
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onSetProfilePicture() {
	yield takeLatest(UserTypes.SET_PROFILE_PICTURE, setUserProfilePicture);
}

/// SEARCH USERS
export const processUserQueryRef = (docs: QueryDocumentSnapshot[]) => {
	const startRef = docs[0].ref;
	const endRef = docs[docs.length - 1].ref;

	let users: UserQueryResult[] = [];

	docs.forEach((doc) => {
		const { displayName, photoURL } = doc.data();

		const user = {
			username: displayName,
			photoURL,
			user_uid: doc.id,
		};
		users.push(user);
	});

	return { users, start: startRef, end: endRef };
};

export function* searchUsers({
	payload,
}: SearchUsersStartAction): Generator | Query {
	try {
		const ref: QuerySnapshot = yield firestore
			.collection("users")
			.orderBy("displayName")
			.startAt(payload)
			.endAt(payload + "\uf8ff")
			.limit(10)
			.get();

		if (ref.docs.length === 0) return null;

		const { users, start, end } = yield processUserQueryRef(ref.docs);

		yield put(setSearchPagination({ start, end }));
		yield put(searchUsersSuccess(users));
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onSearchUsersStart() {
	yield takeLatest(UserTypes.SEARCH_USERS_START, searchUsers);
}

// FRIEND REQUESTS
export function* fetchPendingFriendRequests(): Generator<SelectEffect> | Query {
	try {
		const uid = yield select(selectUID);

		const req_docs: QuerySnapshot = yield firestore
			.collection(`users/${uid}/pending_requests`)
			.get();

		const requests: string[] = yield req_docs.docs.map(
			(doc) => doc.data().user_uid
		);

		yield put(fetchPendingFriendRequestsSuccess(requests));
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onFetchPendingFriendRequests() {
	yield takeLatest(
		UserTypes.FETCH_PENDING_REQUESTS_START,
		fetchPendingFriendRequests
	);
}

export function* fetchFriendRequests():
	| Generator<SelectEffect | PutEffect>
	| Query {
	try {
		const uid = yield select(selectUID);

		const req_docs: QuerySnapshot = yield firestore
			.collection(`users/${uid}/requests`)
			.get();

		const requests: FriendRequestType[] = yield req_docs.docs.map((doc) => ({
			username: doc.data().username,
			uid: doc.data().uid,
		}));

		yield put(fetchFriendRequestsSuccess(requests));
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onFetchFriendRequests() {
	yield takeLatest(UserTypes.FETCH_FRIEND_REQUESTS_START, fetchFriendRequests);
}

// FRIENDS
export function* fetchFriends(): Generator | Query {
	try {
		const uid = yield select(selectUID);

		const friendsRef: QuerySnapshot = yield firestore
			.collection("friendships")
			.where("users", "array-contains", uid)
			.get();

		const friendships: string[] = flatMap(friendsRef.docs, (friend) =>
			filter(friend.data().users, (user_uid) => user_uid !== uid)
		);

		yield console.log("USERS FRIENDSHIP UIDS: ", friendships);

		let friends: Profile[] = [];

		for (const friend_uid of friendships) {
			const friendRef: DocumentSnapshot = yield firestore
				.doc(`users/${friend_uid}`)
				.get();

			const friendDoc = yield friendRef.data();

			if (friendDoc) {
				const friend: Profile = {
					displayName: friendDoc.displayName,
					email: friendDoc.email,
					photoURL: friendDoc.photoURL,
					friend_uid,
				};

				friends.push(friend);
			}
		}
		yield console.log("USERS FRIENDS: ", friends);

		yield put(fetchFriendsSuccess(friends));
	} catch (err) {
		yield put(signUpUserFailure(getErrorMessage(err)));
	}
}

export function* onFetchFriends() {
	yield takeLatest(UserTypes.FETCH_FRIENDS_START, fetchFriends);
}

export function* userSagas() {
	yield all([
		call(onUserSignUpEmail),
		call(onUserSignUpSuccess),
		call(onCheckUserSession),
		call(onUserSignOut),
		call(onUserEmailSignIn),
		call(onSetProfilePicture),
		call(onSearchUsersStart),
		call(onFetchPendingFriendRequests),
		call(onFetchFriendRequests),
		call(onFetchFriends),
	]);
}
