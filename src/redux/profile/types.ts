import Incident from "../../utils/classes/incident/incident";

export interface Profile {
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
}

export type ProfileState = {
	user_info: Profile | null;
	incidents: Incident[];
	friends: Profile[];
	isFriend: boolean;
	error: string | null;
};
