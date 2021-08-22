import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Profile } from "../../../redux/profile/types";
import { State } from "../../../redux/root-reducer";
import { FriendRequestType } from "../../../redux/user/types";
import { fetchFriendsStart } from "../../../redux/user/user.action";
import {
	selectFriendRequests,
	selectFriends,
} from "../../../redux/user/user.selector";
import GenericContainer from "../../common/generic-container/generic-container.component";
import FriendRequest from "../../friends/friend-request/friend-request.component";
import ViewFriendsModal from "../../friends/view-friends-modal/view-friends-modal.component";
import ViewFriends from "../../friends/view-friends/view-friends.component";

import { DashboardProps } from "../types";
import { FriendsTabContainer } from "./friends.styles";

const Friends = (props: DashboardProps) => {
	const dispatch = useDispatch();

	const fetchFriends = () => dispatch(fetchFriendsStart());

	const friendRequests = useSelector<State, FriendRequestType[]>((state) =>
		selectFriendRequests(state)
	);
	const friends = useSelector<State, Profile[]>((state) =>
		selectFriends(state)
	);

	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (props.tab === 3) {
			fetchFriends();
		}
	}, [props.tab]);

	return props.tab === 3 ? (
		<FriendsTabContainer>
			<GenericContainer title="Friend Requests">
				{friendRequests.map((request, i) => (
					<FriendRequest key={i} {...request} />
				))}
			</GenericContainer>

			<ViewFriends friends={friends} handleOpen={() => setOpen(true)} />
			<ViewFriendsModal
				open={open}
				handleClose={() => setOpen(false)}
				handleOpen={() => setOpen(true)}
			/>
		</FriendsTabContainer>
	) : null;
};

export default Friends;
