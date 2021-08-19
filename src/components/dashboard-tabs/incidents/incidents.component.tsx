import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { IncidentsContainer } from "./incidents.styles";
import { State } from "../../../redux/root-reducer";
import Incident from "../../../utils/classes/incident/incident";
import {
	selectIncidents,
	selectIsFetchingIncidents,
} from "../../../redux/incidents/incidents.selector";
import { DashboardProps } from "../types";
import IncidentEditor from "../../incident-editor/incident-editor.component";
import GenericContainer from "../../common/generic-container/generic-container.component";
import Spinner from "../../common/spinner/spinner.component";

const Incidents = (props: DashboardProps) => {
	const incidents = useSelector<State, Incident[]>((state) =>
		selectIncidents(state)
	);

	const isFetching = useSelector<State, boolean>((state) =>
		selectIsFetchingIncidents(state)
	);

	return props.tab === 2 ? (
		<GenericContainer title="Your Incidents" maxHeight="80vh" maxWidth="60vw">
			<IncidentsContainer incidents={incidents}>
				{incidents.length > 0 ? (
					<>
						{incidents.map((incident, i) => (
							<IncidentEditor key={i} incident={incident} />
						))}
					</>
				) : (
					<Fragment>
						{isFetching ? (
							<Spinner />
						) : (
							<div>
								<h4>Oops! You have no icidents!</h4>
								<p>Create your first one</p>
							</div>
						)}
					</Fragment>
				)}
			</IncidentsContainer>
		</GenericContainer>
	) : null;
};

export default Incidents;
