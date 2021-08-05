export interface Friend {
	username: string | null;
	photoURL: string | null;
}

export interface FriendsProps {
	friends: Friend[];
}
