import Incident from "../../utils/classes/incident/incident";
import IncidentTypes from "./incidents.types";

export const createIncidentStart = (incident: Incident) => ({
	type: IncidentTypes.CREATE_INCIDENT_START,
	payload: incident,
});

export const createIncidentSuccess = (incident: Incident) => ({
	type: IncidentTypes.CREATE_INCIDENT_SUCCESS,
	payload: incident,
});

export const fetchIncidentsStart = () => ({
	type: IncidentTypes.FETCH_USER_INCIDENTS_START,
});

export const fetchIncidentsSuccess = (incidents: Array<Incident>) => ({
	type: IncidentTypes.FETCH_USER_INCIDENTS_SUCCESS,
	payload: incidents,
});

export const resetIncidentDate = (incident: Incident) => ({
	type: IncidentTypes.RESET_INCIDENT_DATE,
	payload: incident,
});

export const incidentError = (error: string) => ({
	type: IncidentTypes.INCIDENT_ERROR,
	payload: error,
});
