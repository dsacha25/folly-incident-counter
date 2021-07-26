import ProfileAction from "./profile.action-types";
import ProfileTypes from "./profile.types";
import { ProfileState } from "./types";

const INITIAL_STATE = {
	user_info: null,
	isFriend: false,
	incidents: [],
	error: null,
};

export const profileReducer = (
	state: ProfileState = INITIAL_STATE,
	action: ProfileAction
) => {
	switch (action.type) {
		case ProfileTypes.FETCH_PROFILE_INFO_SUCCESS:
			return {
				...state,
				user_info: action.payload,
				error: null,
			};

		case ProfileTypes.FETCH_PROFILE_INCIDENTS_SUCCESS:
			return {
				...state,
				incidents: action.payload,
				error: null,
			};

		case ProfileTypes.ADD_FRIEND_SUCCESS:
			return {
				...state,
				isFriend: true,
				error: null,
			};

		case ProfileTypes.REMOVE_FRIEND_SUCCESS:
			return {
				...state,
				isFriend: false,
				error: null,
			};

		case ProfileTypes.PROFILE_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
