import { ImageType } from "../../utils/classes/image/types";

import {
	FirebaseAuthError,
	LogInInfo,
	PaginationType,
	SignUpData,
	User,
	UserQueryResult,
} from "./types";
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

export interface SetProfilePictureAction {
	type: UserTypes.SET_PROFILE_PICTURE;
	payload: ImageType;
}

export interface SearchUsersStartAction {
	type: UserTypes.SEARCH_USERS_START;
	payload: string;
}

export interface SearchUsersSuccessAction {
	type: UserTypes.SEARCH_USERS_SUCCESS;
	payload: UserQueryResult[];
}

export interface ClearUserSearchAction {
	type: UserTypes.CLEAR_USER_SEARCH;
}

export interface SetSearchPagination {
	type: UserTypes.SET_SEARCH_PAGINATION;
	payload: PaginationType;
}

type UserAction =
	| SignUpStartAction
	| SignUpSuccessAction
	| SignUpFailureAction
	| SetUserAuthAction
	| SignOutUserAction
	| SignInStartAction
	| SignInSuccessAction
	| SignInFailureAction
	| SetProfilePictureAction
	| SearchUsersStartAction
	| SearchUsersSuccessAction
	| ClearUserSearchAction
	| SetSearchPagination;

export default UserAction;
