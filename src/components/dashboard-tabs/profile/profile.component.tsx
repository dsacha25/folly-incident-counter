import React from "react";
import GenericContainer from "../../common/generic-container/generic-container.component";
import InputWithLabel from "../../common/input-with-label/input-with-label.component";
import { DashboardProps } from "../dashboard.types";
import { ProfileContainer } from "./profile.styles";

const Profile = (props: DashboardProps) => {
	return props.tab === 0 ? (
		<ProfileContainer>
			<GenericContainer title="Info">
				<InputWithLabel label="Name:" placeholder="Name..." />
				<InputWithLabel label="Email:" placeholder="Email..." />
			</GenericContainer>
		</ProfileContainer>
	) : null;
};

export default Profile;
