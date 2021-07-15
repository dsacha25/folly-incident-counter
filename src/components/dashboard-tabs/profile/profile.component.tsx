import React from "react";
import { DashboardProps } from "../dashboard.types";
import { ProfileContainer } from "./profile.styles";

const Profile = (props: DashboardProps) => {
	return props.tab === 0 ? (
		<ProfileContainer>Profile and user information</ProfileContainer>
	) : null;
};

export default Profile;
