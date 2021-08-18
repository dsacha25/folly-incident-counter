import Incident from "../../utils/classes/incident/incident";
import IncidentTypes from "./incidents.types";

// ==== CREATE INCIDENT
export const createIncidentStart = (incident: Incident) => ({
	type: IncidentTypes.CREATE_INCIDENT_START,
	payload: incident,
});

export const createIncidentSuccess = (incident: Incident) => ({
	type: IncidentTypes.CREATE_INCIDENT_SUCCESS,
	payload: incident,
});

// ==== FETCH INCIDENTS
export const fetchIncidentsStart = () => ({
	type: IncidentTypes.FETCH_USER_INCIDENTS_START,
});

export const fetchIncidentsSuccess = (incidents: Incident[]) => ({
	type: IncidentTypes.FETCH_USER_INCIDENTS_SUCCESS,
	payload: incidents,
});

// ==== RESET INCIDENT DATE
export const resetIncidentDate = (incident: Incident) => ({
	type: IncidentTypes.RESET_INCIDENT_DATE,
	payload: incident,
});

// ==== UPDATE INCIDENT INFO
export const updateIncidentInfoStart = (incident: Incident) => ({
	type: IncidentTypes.UPDATE_INCIDENT_START,
	payload: incident,
});

export const updateIncidentInfoSuccess = (incidents: Incident[]) => ({
	type: IncidentTypes.UPDATE_INCIDENT_SUCCESS,
	payload: incidents,
});

// ==== DELETE INCIDENT

// ==== ERROR
export const incidentError = (error: string) => ({
	type: IncidentTypes.INCIDENT_ERROR,
	payload: error,
});
