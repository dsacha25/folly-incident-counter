import React from "react";
import PropTypes from "prop-types";
import {
	DashboardMain,
	AccessPanel,
	MainFeed,
} from "./user-dashboard-page.styles";
import { PageMain } from "../page-styles/page-styles.styles";
import CustomButton from "../../components/common/custom-button/custom-button.component";

const UserDashboardPage = () => {
	/*
	 * Main dashbaord for users
	 *
	 * Users will be able to see the feed of recent incidents from friends
	 *
	 * Quick access toolbar for:
	 * * Creating New Incident
	 * * Updating existing incidents
	 * * Viewing users feed of incidents
	 * * Change Users Settings
	 *
	 * Main Feed
	 * * Incidents from other users
	 * * Option to "expose" other users with photo or story
	 * * Exposures are voted on by other users
	 * * OP can contest
	 *
	 * Search Bar
	 * * To find and add friends
	 *
	 */
	return (
		<PageMain>
			<DashboardMain className="dashboard-main">
				<AccessPanel className="access-panel">
					<h2> Access Panel</h2>

					<CustomButton>Create New Incident</CustomButton>
					<CustomButton>View Your Feed</CustomButton>
					<CustomButton>Update Profile</CustomButton>
				</AccessPanel>
				<MainFeed className="main-feed">
					<h1>Main User Page</h1>
				</MainFeed>
			</DashboardMain>
		</PageMain>
	);
};

UserDashboardPage.propTypes = {};

export default UserDashboardPage;
