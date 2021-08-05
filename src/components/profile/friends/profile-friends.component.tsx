import React from "react";
import { useHistory } from "react-router-dom";

import {
	FriendPhoto,
	FriendsContainer,
	FriendsCount,
	FriendsInfo,
	FriendsLabel,
	FriendsList,
	ViewMoreLink,
} from "./profile-friends.styles";
import { Friend, FriendsProps } from "./types";

const ProfileFriends = (props: FriendsProps) => {
	const history = useHistory();

	return (
		<FriendsContainer>
			<FriendsInfo>
				<FriendsLabel>Friends</FriendsLabel>
				<FriendsCount>{props.friends.length}</FriendsCount>
			</FriendsInfo>
			<FriendsList>
				{props.friends.map(({ photoURL }, i) => (
					<FriendPhoto key={i} photoURL={photoURL} />
				))}
			</FriendsList>
			<ViewMoreLink href={`${history.location}/friends`}>
				view more
			</ViewMoreLink>
		</FriendsContainer>
	);
};

export default ProfileFriends;
