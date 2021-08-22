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
import { useSelector } from "react-redux";
import { State } from "../../../redux/root-reducer";
import { selectUID } from "../../../redux/user/user.selector";

const ViewFriends = (props: FriendsProps) => {
	const history = useHistory();
	const { uid } = useParams<ParamTypes>();
	const user_uid = useSelector<State, string | null>((state) =>
		selectUID(state)
	);

	const handleViewFriends = () => {
		props.handleOpen();
		// if (uid) {
		// 	history.push(`/profile/${uid}/friends`);
		// } else {
		// 	history.push(`/profile/${user_uid}/friends`);
		// }
	};

	const handleVisitProfile = (friend_uid: string) => {
		console.log("UID: ", friend_uid);

		history.push(`/profile/${friend_uid}`);
	};

	return (
		<FriendsContainer>
			<FriendsInfo>
				<FriendsLabel>Friends</FriendsLabel>
				<FriendsCount>{props.friends.length}</FriendsCount>
			</FriendsInfo>
			<FriendsList>
				{props.friends.map(({ photoURL, friend_uid }, i) => (
					<FriendPhoto
						key={i}
						photoURL={photoURL}
						onClick={() => handleVisitProfile(friend_uid)}
					/>
				))}
			</FriendsList>
			<ViewMoreLink onClick={handleViewFriends}>view more</ViewMoreLink>
		</FriendsContainer>
	);
};

export default ViewFriends;
