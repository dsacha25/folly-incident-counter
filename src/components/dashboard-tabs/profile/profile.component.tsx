import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import { selectCurrentUser } from "../../../redux/user/user.selector";

import GenericContainer from "../../common/generic-container/generic-container.component";
import InputWithLabel from "../../common/input-with-label/input-with-label.component";
import {
	InputWrapper,
	Label,
} from "../../common/input-with-label/input-with-label.styles";
import { DashboardProps } from "../types";
import { useForm } from "react-hook-form";
import {
	DataWrapper,
	InfoContainer,
	ProfileContainer,
	StatsContainer,
} from "./profile.styles";

import ImageUploader from "../../images/image-uploader/image-uploader.component";
import { ImageType } from "../../../utils/classes/image/types";
import { setProfilePicture } from "../../../redux/user/user.action";
import { selectNumberOfIncidents } from "../../../redux/incidents/incidents.selector";

interface UpdateUserProps {
	name: string | null;
	email: string;
}

const Profile = (props: DashboardProps) => {
	const dispatch = useDispatch();
	const setPicture = (image: ImageType) => dispatch(setProfilePicture(image));

	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const numberOfIncidents = useSelector<State, number>((state) =>
		selectNumberOfIncidents(state)
	);

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

	const handleProfilePicture = (image: ImageType) => {
		setPicture(image);
	};

	return props.tab === 1 ? (
		<ProfileContainer>
			<GenericContainer title="Info" minHeight="400px">
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

						<ImageUploader
							getFinalImage={handleProfilePicture}
							url={user?.photoURL}
						/>
					</InputWrapper>
				</InfoContainer>
			</GenericContainer>
			<GenericContainer title="Stats" maxHeight="30vh">
				<StatsContainer>
					<DataWrapper>
						<Label>Incidents:</Label>
						<p>{numberOfIncidents}</p>
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
