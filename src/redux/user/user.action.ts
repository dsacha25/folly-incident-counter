import { auth } from "../../utils/firebase/firebase.utils";
import UserTypes from "./user.types";
import { SagaReturnType } from "redux-saga/effects";
import { UserCredential } from "../../utils/firebase/types";
import { FirebaseAuthError, LogInInfo, User } from "./types";
import { Dispatch } from "redux";

export type EmailSignUpInfo = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export interface AdditionalData {
	name: string;
	emailVerifySent: boolean;
}

type AuthedUser = {
	user: User;
	additionalData: AdditionalData;
};

/// USER SIGN UP
export const signUpUserStart = (user: EmailSignUpInfo) => ({
	type: UserTypes.SIGN_UP_USER_START,
	payload: user,
});

export const signUpUserSuccess = (userAuth: AuthedUser) => ({
	type: UserTypes.SIGN_UP_USER_SUCCESS,
	payload: userAuth,
});

export const signUpUserFailure = (error: string) => ({
	type: UserTypes.SIGN_UP_USER_FAILURE,
	payload: error,
});

/// USER SIGN IN
export const signInUserStart = (user: LogInInfo) => ({
	type: UserTypes.SIGN_IN_USER_START,
	payload: user,
});

export const signInUserSuccess = (user: User) => ({
	type: UserTypes.SIGN_IN_USER_SUCCESS,
	payload: user,
});

export const signInUserFailure = (error: FirebaseAuthError) => ({
	type: UserTypes.SIGN_IN_USER_FAILURE,
	payload: error,
});

/// USER AUTH
export const setUserAuth = (user: User) => ({
	type: UserTypes.SET_USER_AUTH,
	payload: user,
});

// ==== CHECK USER SESSION
export const checkUserSession = () => ({
	type: UserTypes.CHECK_USER_SESSION,
});

// SIGN OUT
export const signOutUser = () => ({
	type: UserTypes.SIGN_OUT_USER,
});
