import React from "react";
import { ProfilePicture } from "../../access-panel/access-panel.styles";
import GenericContainer from "../../common/generic-container/generic-container.component";
import InputWithLabel from "../../common/input-with-label/input-with-label.component";
import {
	InputWrapper,
	Label,
} from "../../common/input-with-label/input-with-label.styles";
import { DashboardProps } from "../dashboard.types";
import {
	DataWrapper,
	InfoContainer,
	ProfileContainer,
	StatsContainer,
} from "./profile.styles";

const Profile = (props: DashboardProps) => {
	return props.tab === 0 ? (
		<ProfileContainer>
			<GenericContainer title="Info">
				<InfoContainer>
					<InputWithLabel label="Name:" placeholder="Name..." />
					<InputWithLabel label="Email:" placeholder="Email..." />
					<InputWrapper>
						<Label>Profile Picture:</Label>
						<ProfilePicture photoURL={""} />
					</InputWrapper>
				</InfoContainer>
			</GenericContainer>
			<GenericContainer title="Stats" maxHeight="30vh">
				<StatsContainer>
					<DataWrapper>
						<Label>Days Since Joined</Label>
						<p>07/10/21</p>
					</DataWrapper>
					<DataWrapper>
						<Label>Incidents:</Label>
						<p>5</p>
					</DataWrapper>
					<DataWrapper>
						<Label>Times Exposed:</Label>
						<p>1</p>
					</DataWrapper>
					<DataWrapper>
						<Label>Folly Rating:</Label>
						<p>Promising</p>
					</DataWrapper>
				</StatsContainer>
			</GenericContainer>
		</ProfileContainer>
	) : null;
};

export default Profile;
