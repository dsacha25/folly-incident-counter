import React from "react";
import { useSelector } from "react-redux";
import { IncidentsContainer } from "./incidents.styles";
import { State } from "../../../redux/root-reducer";
import Incident from "../../../utils/classes/incident/incident";
import { selectIncidents } from "../../../redux/incidents/incidents.selector";
import Post from "../../posts/post/post.component";
import { DashboardProps } from "../dashboard.types";

const Incidents = (props: DashboardProps) => {
	const incidents = useSelector<State, Array<Incident>>((state) =>
		selectIncidents(state)
	);

	return props.tab === 1 ? (
		<IncidentsContainer>
			{incidents.length > 0 ? (
				<>
					{incidents.map((incident, i) => (
						<Post key={i} incident={incident} />
					))}
				</>
			) : (
				<div>
					<h4>Oops! You have no icidents!</h4>
					<p>Create your first one</p>
				</div>
			)}
		</IncidentsContainer>
	) : null;
};

export default Incidents;
