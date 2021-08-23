import React from "react";
import { useHistory } from "react-router-dom";
import {
	AvatarContainer,
	AvatarDisplayName,
	AvatarPhoto,
} from "./avatar.styles";
import { AvatarProps } from "./types";

const Avatar = (props: AvatarProps) => {
	const history = useHistory();

	const handleViewProfile = () => {
		history.push(`/profile/${props.user_uid}`);
	};

	return (
		<AvatarContainer noBorder={props.noBorder}>
			<AvatarPhoto photoURL={props.photoURL} onClick={handleViewProfile} />
			<AvatarDisplayName>{props.username}</AvatarDisplayName>
		</AvatarContainer>
	);
};

export default Avatar;
