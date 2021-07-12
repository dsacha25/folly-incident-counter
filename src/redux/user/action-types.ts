import { UserCredential } from "../../utils/firebase/types";
import { FirebaseAuthError, LogInInfo, SignUpData, User } from "./types";
import { AdditionalData } from "./user.action";
import UserTypes from "./user.types";

type SuccessData = {
	user: User;
	additionalData: AdditionalData;
};

export interface SignUpStartAction {
	type: UserTypes.SIGN_UP_USER_START;
	payload: SignUpData;
}

export interface SignUpSuccessAction {
	type: UserTypes.SIGN_UP_USER_SUCCESS;
	payload: SuccessData;
}

export interface SignUpFailureAction {
	type: UserTypes.SIGN_UP_USER_FAILURE;
	payload: string;
}

export interface SignInStartAction {
	type: UserTypes.SIGN_IN_USER_START;
	payload: LogInInfo;
}

export interface SignInSuccessAction {
	type: UserTypes.SIGN_IN_USER_SUCCESS;
	payload: User;
}

export interface SignInFailureAction {
	type: UserTypes.SIGN_IN_USER_FAILURE;
	payload: FirebaseAuthError;
}

export interface SetUserAuthAction {
	type: UserTypes.SET_USER_AUTH;
	payload: User;
}

export interface SignOutUserAction {
	type: UserTypes.SIGN_OUT_USER;
}

type UserAction =
	| SignUpStartAction
	| SignUpSuccessAction
	| SignUpFailureAction
	| SetUserAuthAction
	| SignOutUserAction
	| SignInStartAction
	| SignInSuccessAction
	| SignInFailureAction;

export default UserAction;
