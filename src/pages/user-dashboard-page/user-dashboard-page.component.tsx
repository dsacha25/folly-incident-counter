import React, { useEffect } from "react";

import { DashboardMain, MainFeed } from "./user-dashboard-page.styles";
import { PageMain } from "../page-styles/page-styles.styles";
import CustomButton from "../../components/common/custom-button/custom-button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { State } from "../../redux/root-reducer";
import { User } from "../../redux/user/types";
import Incident from "../../utils/classes/incident/incident";
import {
	createIncidentStart,
	fetchIncidentsStart,
} from "../../redux/incidents/incidents.actions";
import { selectIncidents } from "../../redux/incidents/incidents.selector";
import { subDays } from "date-fns";
import Post from "../../components/posts/post/post.component";
import AccessPanel from "../../components/access-panel/access-panel.component";

const UserDashboardPage = () => {
	const dispatch = useDispatch();

	const createIncident = (incident: Incident) =>
		dispatch(createIncidentStart(incident));

	const fetchIncidents = () => dispatch(fetchIncidentsStart());

	const user = useSelector<State, User>((state) => selectCurrentUser(state));
	const incidents = useSelector<State, Array<Incident>>((state) =>
		selectIncidents(state)
	);

	console.log("USER: ", user);

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

	const uploadFakeIncidentForTesting = () => {
		if (user) {
			createIncident(
				new Incident({
					name: "Trip to Hospital",
					incident_date: subDays(new Date(), 10),
					user: {
						username: user.displayName,
						photoURL: user.photoURL,
					},
				})
			);
		}
	};

	return (
		<PageMain>
			<DashboardMain className="dashboard-main">
				<AccessPanel />
				<MainFeed className="main-feed">
					<div>
						<div>
							{incidents.length > 0 ? (
								<div>
									{incidents.map((incident, i) => (
										<Post key={i} incident={incident} />
									))}
								</div>
							) : (
								<h4>Oops! You have no icidents!</h4>
							)}
							<p>Create your first one</p>
							<CustomButton onClick={uploadFakeIncidentForTesting}>
								Create
							</CustomButton>
						</div>
					</div>
				</MainFeed>
			</DashboardMain>
		</PageMain>
	);
};

UserDashboardPage.propTypes = {};

export default UserDashboardPage;
