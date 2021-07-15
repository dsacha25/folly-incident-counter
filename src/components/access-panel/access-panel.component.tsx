import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CustomButton from "../common/custom-button/custom-button.component";
import { AcceessPanelContainer, ProfilePicture } from "./access-panel.styles";
import { State } from "../../redux/root-reducer";
import { User } from "../../redux/user/types";
import { setTabDashboard } from "../../redux/tabs/tabs.action";

const AccessPanel = () => {
	const dispatch = useDispatch();

	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const setTab = (index: number) => dispatch(setTabDashboard(index));

	const [activeTab, setActiveTab] = useState<number>(0);

	const handleSelectTab = (e: React.FormEvent<HTMLButtonElement>) => {
		const { id } = e.currentTarget;

		setActiveTab(parseInt(id));
		setTab(parseInt(id));

		// CONNECT TO REDUX
	};

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
	return (
		<AcceessPanelContainer>
			<ProfilePicture photoURL={user?.photoURL} />
			<CustomButton
				onClick={handleSelectTab}
				id="0"
				minWidth="200px"
				margin="20px 0"
				active={activeTab === 0}
			>
				Profile
			</CustomButton>
			<CustomButton
				onClick={handleSelectTab}
				id="1"
				minWidth="200px"
				margin="20px 0"
				active={activeTab === 1}
			>
				Incidents
			</CustomButton>
			<CustomButton
				onClick={handleSelectTab}
				id="2"
				minWidth="200px"
				margin="20px 0"
				active={activeTab === 2}
			>
				Feed
			</CustomButton>
			<CustomButton
				id="3"
				minWidth="200px"
				margin="20px 0"
				backgroundColor="red"
				onClick={handleSelectTab}
				active={activeTab === 3}
			>
				Delete Profile
			</CustomButton>
		</AcceessPanelContainer>
	);
};

export default AccessPanel;
