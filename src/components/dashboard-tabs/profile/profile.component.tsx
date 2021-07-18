import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { ProfilePicture } from "../../access-panel/access-panel.styles";
import GenericContainer from "../../common/generic-container/generic-container.component";
import InputWithLabel from "../../common/input-with-label/input-with-label.component";
import {
	InputWrapper,
	Label,
} from "../../common/input-with-label/input-with-label.styles";
import { DashboardProps } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import {
	DataWrapper,
	InfoContainer,
	ProfileContainer,
	StatsContainer,
} from "./profile.styles";
import CustomInput from "../../common/custom-input/custom-input.component";

interface UpdateUserProps {
	name: string | null;
	email: string;
}

const Profile = (props: DashboardProps) => {
	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateUserProps>();

	useEffect(() => {
		if (user) {
			const name = user.displayName;

			if (name) {
				console.log("USER NAME: ", user.displayName);
				setValue("name", "name", { shouldValidate: true });
			}
		}
	}, [user, setValue]);

	return props.tab === 1 ? (
		<ProfileContainer>
			<GenericContainer title="Info">
				<InfoContainer>
					<InputWithLabel
						{...register("name", {
							required: true,
						})}
						defaultValue={user && user.displayName ? user.displayName : ""}
						label="Name:"
					/>

					<InputWithLabel
						{...register("email", { required: true })}
						label="Email:"
						defaultValue={user && user.email ? user.email : ""}
					/>
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
