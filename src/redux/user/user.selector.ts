import { createSelector } from "reselect";
import { State } from "../root-reducer";
import { FirebaseAuthError, User, UserError } from "./types";
import { UserState } from "./user.reducer";

const selectUser = (state: State) => state.user;

export const selectCurrentUser = createSelector<State, UserState, User>(
	selectUser,
	(user) => user.user
);

export const selectUserError = createSelector<
	State,
	UserState,
	FirebaseAuthError | null
>(selectUser, (user) => user.error);
