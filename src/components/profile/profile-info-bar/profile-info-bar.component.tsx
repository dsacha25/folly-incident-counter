import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectProfileIsFriend } from "../../../redux/profile/profile.selector";
import { State } from "../../../redux/root-reducer";

import ProfilePicture from "../../common/profile-picture/profile-picture.component";
import ProfileFriends from "../friends/profile-friends.component";
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

	const isFriend = useSelector<State, boolean>((state) =>
		selectProfileIsFriend(state)
	);

	const handleAddFriend = () => {
		//
	};

	const handleRemoveFriend = () => {
		//
	};

	const handleReturn = () => {
		history.goBack();
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
					<ProfileButton onClick={handleAddFriend}>Add Friend</ProfileButton>
				)}
			</ProfileControls>
			<ProfilePicture photoURL={props.user.photoURL} />
			<ProfileInfo>
				<InfoText>{props.user.displayName}</InfoText>
				<InfoText>{props.user.email}</InfoText>
			</ProfileInfo>
			<ProfileFriends friends={[]} />
		</ProfileInfoContainer>
	);
};

export default ProfileInfoBar;
