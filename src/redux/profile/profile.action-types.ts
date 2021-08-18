import Incident from "../../utils/classes/incident/incident";
import { User } from "../user/types";
import ProfileTypes from "./profile.types";
import { Profile } from "./types";

export interface FetchProfileInfoStartAction {
	type: ProfileTypes.FETCH_PROFILE_INFO_START;
	payload: string;
}

export interface FetchProfileInfoSuccessAction {
	type: ProfileTypes.FETCH_PROFILE_INFO_SUCCESS;
	payload: Profile;
}

export interface FetchProfileIncidentsStartAction {
	type: ProfileTypes.FETCH_PROFILE_INCIDENTS_START;
	payload: string;
}

export interface FetchProfileIncidentsSuccessAction {
	type: ProfileTypes.FETCH_PROFILE_INCIDENTS_SUCCESS;
	payload: Incident[];
}

export interface AddFriendStartAction {
	type: ProfileTypes.ADD_FRIEND_START;
	payload: string;
}

export interface AddFriendSuccessAction {
	type: ProfileTypes.ADD_FRIEND_SUCCESS;
}

export interface RemoveFriendStartAction {
	type: ProfileTypes.REMOVE_FRIEND_START;
	payload: string;
}

export interface RemoveFriendSuccessAction {
	type: ProfileTypes.REMOVE_FRIEND_SUCCESS;
}

export interface ProfileErrorAction {
	type: ProfileTypes.PROFILE_ERROR;
	payload: string;
}

export interface FetchFriendsStartAction {
	type: ProfileTypes.FETCH_PROFILE_FRIENDS_START;
	payload: string;
}

export interface FetchFriendsSuccessAction {
	type: ProfileTypes.FETCH_PROFILE_FRIENDS_SUCCESS;
	payload: Profile[];
}

export interface SetIsFriendAction {
	type: ProfileTypes.SET_IS_FRIEND;
	payload: boolean;
}

type ProfileAction =
	| FetchProfileInfoStartAction
	| FetchProfileInfoSuccessAction
	| FetchProfileIncidentsStartAction
	| FetchProfileIncidentsSuccessAction
	| AddFriendStartAction
	| AddFriendSuccessAction
	| RemoveFriendStartAction
	| RemoveFriendSuccessAction
	| ProfileErrorAction
	| FetchFriendsStartAction
	| FetchFriendsSuccessAction
	| SetIsFriendAction;

export default ProfileAction;
