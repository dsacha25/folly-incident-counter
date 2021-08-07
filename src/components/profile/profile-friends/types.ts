import { Profile } from "../../../redux/profile/types";

export interface Friend {
	username: string | null;
	photoURL: string | null;
}

export interface FriendsProps {
	friends: Profile[];
}
