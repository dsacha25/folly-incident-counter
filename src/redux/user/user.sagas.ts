import { EffectCallback } from "react";
import {
	all,
	call,
	put,
	CallEffect,
	Effect,
	PutEffect,
	SagaReturnType,
	takeLatest,
	SimpleEffect,
} from "redux-saga/effects";
import {
	auth,
	firestore,
	getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import {
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	UserCredential,
} from "../../utils/firebase/types";

import {
	setUserAuth,
	signInUserSuccess,
	signUpUserFailure,
	signUpUserSuccess,
} from "./user.action";

import UserTypes from "./user.types";

import {
	SignInStartAction,
	SignUpStartAction,
	SignUpSuccessAction,
} from "./action-types";
import { User } from "./types";

/// CREATE USER IN FIREBASE
export function* createUserInFirebase({
	payload,
}: SignUpSuccessAction):
	| Generator<SagaReturnType<typeof firestore.doc>>
	| Promise<void> {
	try {
		const { user, additionalData } = payload;
		const userData = user.user;

		if (!userData) return;

		const userRef: DocumentReference = yield firestore.doc(
			`customers/${userData.uid}`
		);

		const snapshot: DocumentSnapshot = yield userRef.get();

		if (!snapshot.exists) {
			yield firestore.doc(`customers/${userData.uid}`).set({
				...additionalData,
				displayName: userData.displayName,
				email: userData.email,
			});
		}
	} catch (err) {
		yield put(signUpUserFailure(err));
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
		yield put(signUpUserFailure(err));
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
		yield put(signUpUserFailure(err));
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
		yield put(signUpUserFailure(err.message));
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

export function* userSagas() {
	yield all([
		call(onUserSignUpEmail),
		call(onUserSignUpSuccess),
		call(onCheckUserSession),
		call(onUserSignOut),
		call(onUserEmailSignIn),
	]);
}
