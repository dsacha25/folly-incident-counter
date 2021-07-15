import React from "react";
import { SettingsContainer } from "./settings.styles";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import CustomButton from "../../common/custom-button/custom-button.component";
import { DashboardProps } from "../dashboard.types";

const Settings = (props: DashboardProps) => {
	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const handleDeleteUser = async () => {
		if (user) {
			try {
				await user
					.delete()
					.then(() => console.log("User successfully deleted"));

				window.location.reload();
			} catch (err) {
				console.log("Unable to delete user: ", err.message);
			}
		}
	};

	return props.tab === 3 ? (
		<SettingsContainer>
			Settings for Profile Information and account info
			<CustomButton onClick={handleDeleteUser}> Delete Account</CustomButton>
		</SettingsContainer>
	) : null;
};

export default Settings;
