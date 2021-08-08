import UserTypes from "./user.types";

import {
	FirebaseAuthError,
	FriendRequestType,
	LogInInfo,
	PaginationType,
	PendingFriendRequests,
	User,
	UserQueryResult,
} from "./types";
import { ImageType } from "../../utils/classes/image/types";
import { Profile } from "../profile/types";

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

// PROFILE PICTURE
export const setProfilePicture = (image: ImageType) => ({
	type: UserTypes.SET_PROFILE_PICTURE,
	payload: image,
});

// SEARCH USERS
export const searchUsersStart = (query: string) => ({
	type: UserTypes.SEARCH_USERS_START,
	payload: query,
});

export const searchUsersSuccess = (users: UserQueryResult[]) => ({
	type: UserTypes.SEARCH_USERS_SUCCESS,
	payload: users,
});

export const clearUserSearch = () => ({
	type: UserTypes.CLEAR_USER_SEARCH,
});

export const setSearchPagination = (pagination: PaginationType) => ({
	type: UserTypes.SET_SEARCH_PAGINATION,
	payload: pagination,
});

// FRIEND REQUESTS
export const fetchPendingFriendRequestsStart = () => ({
	type: UserTypes.FETCH_PENDING_REQUESTS_START,
});

export const fetchPendingFriendRequestsSuccess = (
	users: PendingFriendRequests
) => ({
	type: UserTypes.FETCH_PENDING_FRIEND_REQUESTS_SUCCESS,
	payload: users,
});

export const fetchFriendRequestsStart = () => ({
	type: UserTypes.FETCH_FRIEND_REQUESTS_START,
});

export const fetchFriendRequestsSuccess = (requests: FriendRequestType[]) => ({
	type: UserTypes.FETCH_FRIEND_REQUESTS_SUCCESS,
	payload: requests,
});

// FETCH FRIENDS
export const fetchFriendsStart = () => ({
	type: UserTypes.FETCH_FRIENDS_START,
});

export const fetchFriendsSuccess = (friends: Profile[]) => ({
	type: UserTypes.FETCH_FRIENDS_SUCCESS,
	payload: friends,
});
