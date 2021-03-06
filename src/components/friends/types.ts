import { Profile } from "../../redux/profile/types";

export interface FriendRequestProps {
	uid: string;
	username: string;
}

export interface FriendsProps {
	friends: Profile[];
	handleOpen: () => void;
}

export interface ViewFriendsProps {
	open: boolean;
	handleClose: () => void;
	handleOpen: () => void;
}
