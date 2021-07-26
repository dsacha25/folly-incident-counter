import { createSelector } from "reselect";
import { State } from "../root-reducer";
import { FirebaseAuthError, User, UserQueryResult } from "./types";
import { UserState } from "./user.reducer";

const selectUser = (state: State) => state.user;

export const selectCurrentUser = createSelector<State, UserState, User>(
	selectUser,
	(user) => user.user
);

export const selectUID = createSelector<State, User | null, string | null>(
	[selectCurrentUser],
	(user) => user && user.uid
);

export const selectPhotoURL = createSelector<State, User | null, string | null>(
	[selectCurrentUser],
	(user) => user && user.photoURL
);

export const selectUsersSearchResult = createSelector<
	State,
	UserState,
	UserQueryResult[]
>(selectUser, (user) => user.usersQuery);

export const selectUserError = createSelector<
	State,
	UserState,
	FirebaseAuthError | null
>(selectUser, (user) => user.error);
