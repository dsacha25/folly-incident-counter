import { auth } from "../../utils/firebase/firebase.utils";
import { DocumentReference } from "../../utils/firebase/types";

export type User = typeof auth.currentUser;

export interface FirebaseAuthError {
	a: string;
	code: string;
	message: string;
}

export type PendingFriendRequests = string[];

export interface FriendRequestType {
	uid: string;
	username: string;
}

export type UserError = string | FirebaseAuthError | null;

export type SignUpData = {
	name: string;
	email: string;
	password: string;
};

export type LogInInfo = {
	email: string;
	password: string;
};

export interface UserQueryResult {
	username: string;
	user_uid: string;
	photoURL: string;
}

export interface PaginationRefType {
	start: DocumentReference | null;
	end: DocumentReference | null;
}

export type PaginationType = PaginationRefType | null;
