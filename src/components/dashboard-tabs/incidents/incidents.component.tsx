import React from "react";
import { useSelector } from "react-redux";
import { IncidentsContainer } from "./incidents.styles";
import { State } from "../../../redux/root-reducer";
import Incident from "../../../utils/classes/incident/incident";
import { selectIncidents } from "../../../redux/incidents/incidents.selector";
import Post from "../../posts/post/post.component";
import { DashboardProps } from "../dashboard.types";
import IncidentEditor from "../../incident-editor/incident-editor.component";
import GenericContainer from "../../common/generic-container/generic-container.component";

const Incidents = (props: DashboardProps) => {
	const incidents = useSelector<State, Array<Incident>>((state) =>
		selectIncidents(state)
	);

	return props.tab === 1 ? (
		<GenericContainer title="Your Incidents" maxHeight="80vh" maxWidth="51.6vw">
			<IncidentsContainer>
				{incidents.length > 0 ? (
					<>
						{incidents.map((incident, i) => (
							<IncidentEditor key={i} incident={incident} />
						))}
					</>
				) : (
					<div>
						<h4>Oops! You have no icidents!</h4>
						<p>Create your first one</p>
					</div>
				)}
			</IncidentsContainer>
		</GenericContainer>
	) : null;
};

export default Incidents;
