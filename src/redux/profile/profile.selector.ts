import { profile } from "console";
import { createSelector } from "reselect";
import Incident from "../../utils/classes/incident/incident";
import { State } from "../root-reducer";

import { Profile, ProfileState } from "./types";

const selectProfile = (state: State) => state.profile;

export const selectProfileUser = createSelector<
	State,
	ProfileState,
	Profile | null
>([selectProfile], (profile) => profile.user_info);

export const selectProfileIncidents = createSelector<
	State,
	ProfileState,
	Incident[]
>([selectProfile], (profile) => profile.incidents);

export const selectProfileIsFriend = createSelector<
	State,
	ProfileState,
	boolean
>([selectProfile], (profile) => profile.isFriend);

export const selectProfileError = createSelector<
	State,
	ProfileState,
	string | null
>(selectProfile, (profile) => profile.error);

export const selectProfileFriends = createSelector<
	State,
	ProfileState,
	Profile[]
>(selectProfile, (profile) => profile.friends);
