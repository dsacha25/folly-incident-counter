import React from "react";
import { ProfilePictureContainer } from "./profile-picture.styles";
import { ProfilePictureProps } from "./types";

const ProfilePicture = (props: ProfilePictureProps) => {
	return <ProfilePictureContainer {...props} />;
};

export default ProfilePicture;
