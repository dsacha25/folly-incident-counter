import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { ParamTypes } from "../../../types";
import {
	FriendPhoto,
	FriendsContainer,
	FriendsCount,
	FriendsInfo,
	FriendsLabel,
	FriendsList,
	ViewMoreLink,
} from "./view-friends.styles";
import { FriendsProps } from "../types";

const ViewFriends = (props: FriendsProps) => {
	const history = useHistory();
	const { uid } = useParams<ParamTypes>();

	const handleViewFriends = () => {
		history.push(`/profile/${uid}/friends`);
	};

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
			<ViewMoreLink onClick={handleViewFriends}>view more</ViewMoreLink>
		</FriendsContainer>
	);
};

export default ViewFriends;
