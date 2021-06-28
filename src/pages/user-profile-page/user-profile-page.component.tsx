import React from "react";
import { PageMain } from "../page-styles/page-styles.styles";
import {
	ProfilePage,
	ControlPanel,
	UserFeed,
} from "./user-profile-page.styles";

const UserProfilePage = () => {
	return (
		<PageMain>
			<ProfilePage>
				<ControlPanel>
					<h2>Control Panel</h2>
				</ControlPanel>
				<UserFeed>
					<h1>Profile Page</h1>
				</UserFeed>
			</ProfilePage>
		</PageMain>
	);
};

export default UserProfilePage;
