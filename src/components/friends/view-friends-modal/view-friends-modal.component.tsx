import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProfileFriends } from "../../../redux/profile/profile.selector";
import { Profile } from "../../../redux/profile/types";
import { State } from "../../../redux/root-reducer";
import { selectFriends } from "../../../redux/user/user.selector";
import { ParamTypes } from "../../../types";
import Modal from "../../common/modal/modal.component";
import { ViewFriendsProps } from "../types";
import ViewFriends from "../view-friends/view-friends.component";

const ViewFriendsModal = (props: ViewFriendsProps) => {
	const { uid } = useParams<ParamTypes>();

	const [friends, setFriends] = useState<Profile[]>([]);

	const profileFriends = useSelector<State, Profile[]>((state) =>
		selectProfileFriends(state)
	);

	const userFriends = useSelector<State, Profile[]>((state) =>
		selectFriends(state)
	);

	useEffect(() => {
		if (profileFriends.length > 0 && uid) {
			console.log("PROFILE FRIENDS: ", profileFriends);
			setFriends(profileFriends);
		}

		if (userFriends.length > 0 && !uid) {
			console.log("USER FRIENDS: ", userFriends);

			setFriends(userFriends);
		}
	}, []);

	return (
		<Modal open={props.open} handleClose={props.handleClose}>
			<ViewFriends friends={friends} handleOpen={props.handleOpen} />
		</Modal>
	);
};

export default ViewFriendsModal;
