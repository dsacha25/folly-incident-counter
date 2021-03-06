import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
	selectProfileFriends,
	selectProfileIsFriend,
} from "../../../redux/profile/profile.selector";
import { Profile } from "../../../redux/profile/types";
import { State } from "../../../redux/root-reducer";
import {
	selectPendingFriendRequests,
	selectUID,
} from "../../../redux/user/user.selector";
import { ParamTypes } from "../../../types";
import callFirebaseFunction from "../../../utils/methods/call-firebase-function.method";

import ProfilePicture from "../../common/profile-picture/profile-picture.component";
import ViewFriendsModal from "../../friends/view-friends-modal/view-friends-modal.component";
import ViewFriends from "../../friends/view-friends/view-friends.component";
import ProfileFriends from "../profile-friends/profile-friends.component";
import {
	InfoText,
	ProfileButton,
	ProfileControls,
	ProfileInfo,
	ProfileInfoContainer,
} from "./profile-info-bar.styles";
import { ProfileInfoBarProps } from "./types";

const ProfileInfoBar = (props: ProfileInfoBarProps) => {
	const history = useHistory();

	const { uid } = useParams<ParamTypes>();
	const user_uid = useSelector<State, string | null>((state) =>
		selectUID(state)
	);

	const pendingRequests = useSelector<State, string[]>((state) =>
		selectPendingFriendRequests(state)
	);

	const isFriend = useSelector<State, boolean>((state) =>
		selectProfileIsFriend(state)
	);

	const friends = useSelector<State, Profile[]>((state) =>
		selectProfileFriends(state)
	);

	const [disabled, setDisabled] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		console.log("PENDING: ", pendingRequests.includes(uid));

		if (uid === user_uid || pendingRequests.includes(uid)) {
			setDisabled(true);
		}
	}, [uid, pendingRequests]);

	const handleAddFriend = async () => {
		try {
			await callFirebaseFunction("sendFriendRequest", { user_uid: uid });
		} catch (err) {
			console.log("Error: ", err.message);
		}
	};

	const handleRemoveFriend = () => {
		//
	};

	const handleReturn = () => {
		history.goBack();
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<ProfileInfoContainer>
			<ProfileControls>
				<ProfileButton onClick={handleReturn}>RETURN</ProfileButton>
				{isFriend ? (
					<ProfileButton onClick={handleRemoveFriend}>
						Remove Friend
					</ProfileButton>
				) : (
					<ProfileButton disabled={disabled} onClick={handleAddFriend}>
						{pendingRequests.includes(uid) ? "Pending" : "Add Friend"}
					</ProfileButton>
				)}
			</ProfileControls>
			<ProfilePicture photoURL={props.user.photoURL} />
			<ProfileInfo>
				<InfoText>{props.user.displayName}</InfoText>
				<InfoText>{props.user.email}</InfoText>
			</ProfileInfo>
			<ViewFriends friends={friends} handleOpen={handleOpen} />
			{/* <ProfileFriends friends={friends} /> */}

			<ViewFriendsModal
				open={open}
				handleClose={handleClose}
				handleOpen={handleOpen}
			/>
		</ProfileInfoContainer>
	);
};

export default ProfileInfoBar;
