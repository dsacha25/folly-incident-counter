import { auth } from "../../utils/firebase/firebase.utils";

export type User = typeof auth.currentUser;

export interface FirebaseAuthError {
	a: string;
	code: string;
	message: string;
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
