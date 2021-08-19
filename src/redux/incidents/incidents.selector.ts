import { createSelector } from "reselect";
import Incident from "../../utils/classes/incident/incident";
import { State } from "../root-reducer";
import { IncidentState } from "./incidents.reducer";

const selectIncident = (state: State) => state.incidents;

export const selectIncidents = createSelector<State, IncidentState, Incident[]>(
	selectIncident,
	(incidents) => incidents.incidents
);

export const selectNumberOfIncidents = createSelector<
	State,
	Incident[],
	number
>(selectIncidents, (incidents) => incidents.length);

export const selectIsFetchingIncidents = createSelector<
	State,
	IncidentState,
	boolean
>(selectIncident, (incidents) => incidents.fetching);

export const selectIncidentError = createSelector<
	State,
	IncidentState,
	string | null
>(selectIncident, (incident) => incident.error);
