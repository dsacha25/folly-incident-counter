import { createSelector } from "reselect";
import Incident from "../../utils/classes/incident/incident";
import { State } from "../root-reducer";
import { IncidentState } from "./incidents.reducer";

const selectIncident = (state: State) => state.incidents;

export const selectIncidents = createSelector<
	State,
	IncidentState,
	Array<Incident>
>(selectIncident, (incidents) => incidents.incidents);

export const selectNumberOfIncidents = createSelector(
	selectIncidents,
	(incidents) => incidents.length
);

export const selectIncidentError = createSelector<
	State,
	IncidentState,
	string | null
>(selectIncident, (incident) => incident.error);
