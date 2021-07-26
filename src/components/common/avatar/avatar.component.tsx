import React from "react";
import {
	AvatarContainer,
	AvatarDisplayName,
	AvatarPhoto,
} from "./avatar.styles";
import { AvatarProps } from "./types";

const Avatar = (props: AvatarProps) => {
	return (
		<AvatarContainer noBorder={props.noBorder}>
			<AvatarPhoto photoURL={props.photoURL} />
			<AvatarDisplayName>{props.username}</AvatarDisplayName>
		</AvatarContainer>
	);
};

export default Avatar;
