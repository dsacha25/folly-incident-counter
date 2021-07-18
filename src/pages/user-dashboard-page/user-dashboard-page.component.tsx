import React, { useEffect } from "react";

import { DashboardMain, MainFeed } from "./user-dashboard-page.styles";
import { PageMain } from "../page-styles/page-styles.styles";

import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/root-reducer";

import { fetchIncidentsStart } from "../../redux/incidents/incidents.actions";

import AccessPanel from "../../components/access-panel/access-panel.component";

import { selectDashboardTab } from "../../redux/tabs/tabs.selector";

import Profile from "../../components/dashboard-tabs/profile/profile.component";
import Incidents from "../../components/dashboard-tabs/incidents/incidents.component";
import Feed from "../../components/dashboard-tabs/feed/feed.component";
import Settings from "../../components/dashboard-tabs/settings/settings.component";
import ToolbarMain from "../../components/toolbar/toolbar-main/toolbar-main.component";

const UserDashboardPage = () => {
	const dispatch = useDispatch();

	const fetchIncidents = () => dispatch(fetchIncidentsStart());

	const tab = useSelector<State, number>((state) => selectDashboardTab(state));

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

	useEffect(() => {
		fetchIncidents();

		//eslint-disable-next-line
	}, []);

	return (
		<PageMain>
			<DashboardMain className="dashboard-main">
				<AccessPanel />
				<MainFeed className="main-feed">
					<ToolbarMain />
					<Profile tab={tab} />
					<Incidents tab={tab} />
					<Feed tab={tab} />
					<Settings tab={tab} />
				</MainFeed>
			</DashboardMain>
		</PageMain>
	);
};

export default UserDashboardPage;
