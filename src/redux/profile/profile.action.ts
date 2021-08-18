import Incident from "../../utils/classes/incident/incident";
import ProfileTypes from "./profile.types";
import { Profile } from "./types";

export const fetchProfileInfoStart = (uid: string) => ({
	type: ProfileTypes.FETCH_PROFILE_INFO_START,
	payload: uid,
});

export const fetchProfileInfoSuccess = (user_info: Profile) => ({
	type: ProfileTypes.FETCH_PROFILE_INFO_SUCCESS,
	payload: user_info,
});

export const fetchProfileIncidentsStart = (uid: string) => ({
	type: ProfileTypes.FETCH_PROFILE_INCIDENTS_START,
	payload: uid,
});

export const fetchProfileIncidentsSuccess = (incidents: Incident[]) => ({
	type: ProfileTypes.FETCH_PROFILE_INCIDENTS_SUCCESS,
	payload: incidents,
});

export const addFriendStart = (uid: string) => ({
	type: ProfileTypes.ADD_FRIEND_START,
	payload: uid,
});

export const addFriendSuccess = () => ({
	type: ProfileTypes.ADD_FRIEND_START,
});

export const setIsFriend = (isFriend: boolean) => ({
	type: ProfileTypes.SET_IS_FRIEND,
	payload: isFriend,
});

export const removeFriendStart = (uid: string) => ({
	type: ProfileTypes.REMOVE_FRIEND_START,
	payload: uid,
});

export const removeFriendSuccess = () => ({
	type: ProfileTypes.REMOVE_FRIEND_SUCCESS,
});

export const setProfileError = (error: string) => ({
	type: ProfileTypes.PROFILE_ERROR,
	payload: error,
});

export const fetchProfileFriendsStart = (uid: string) => ({
	type: ProfileTypes.FETCH_PROFILE_FRIENDS_START,
	payload: uid,
});

export const fetchProfileFriendsSuccess = (friends: Profile[]) => ({
	type: ProfileTypes.FETCH_PROFILE_FRIENDS_SUCCESS,
	payload: friends,
});
