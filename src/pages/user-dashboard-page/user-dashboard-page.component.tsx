import React from "react";
import PropTypes from "prop-types";
import "./user-dashboard-page.styles.css";
import { PageMain } from "../page-styles/page-styles.styles";

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
			<div className="dashboard-main">
				<div className="access-panel">
					<h2> Access Panel</h2>
					<button>Create New Incident</button>
					<button>View Your Feed</button>
					<button>Update Profile</button>
				</div>
				<div className="main-feed">
					<h1>Main User Page</h1>
				</div>
			</div>
		</PageMain>
	);
};

UserDashboardPage.propTypes = {};

export default UserDashboardPage;
