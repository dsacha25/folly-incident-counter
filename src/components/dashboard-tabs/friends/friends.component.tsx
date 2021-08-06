import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../redux/root-reducer";
import { FriendRequestType } from "../../../redux/user/types";
import { selectFriendRequests } from "../../../redux/user/user.selector";
import FriendRequest from "../../friend-request/friend-request.component";
import { FriendsContainer } from "../../profile/profile-friends/profile-friends.styles";
import { DashboardProps } from "../types";

const Friends = (props: DashboardProps) => {
	const friendRequests = useSelector<State, FriendRequestType[]>((state) =>
		selectFriendRequests(state)
	);

	return props.tab === 3 ? (
		<FriendsContainer>
			{friendRequests.map((request, i) => (
				<FriendRequest key={i} {...request} />
			))}
		</FriendsContainer>
	) : null;
};

export default Friends;
