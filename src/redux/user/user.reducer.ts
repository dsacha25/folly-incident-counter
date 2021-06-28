import UserTypes from "./user.types";
import UserAction from "./action-types";
import { FirebaseAuthError, User } from "./types";

export type UserState = {
	user: User | null;
	error: FirebaseAuthError | null;
};

const INITIAL_STATE = {
	user: null,
	error: null,
};

export const userReducer = (
	state: UserState = INITIAL_STATE,
	action: UserAction
) => {
	switch (action.type) {
		case UserTypes.SIGN_UP_USER_START:
			return {
				...state,
				error: null,
			};

		case UserTypes.SIGN_UP_USER_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				error: null,
			};

		case UserTypes.SIGN_IN_USER_SUCCESS:
		case UserTypes.SET_USER_AUTH:
			return {
				...state,
				user: action.payload,
				error: null,
			};

		case UserTypes.SIGN_IN_USER_FAILURE:
		case UserTypes.SIGN_UP_USER_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		case UserTypes.SIGN_OUT_USER:
			return {
				...state,
				user: null,
				error: null,
			};

		case UserTypes.SIGN_IN_USER_START:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
