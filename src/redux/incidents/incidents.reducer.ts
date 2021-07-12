import IncidentTypes from "./incidents.types";
import IncidentAction from "./incidents.action-types";
import Incident from "../../utils/classes/incident/incident";

export type IncidentState = {
	incidents: Array<Incident>;
	error: string | null;
};

const INITIAL_STATE = {
	incidents: [],
	error: null,
};

export const incidentReducer = (
	state: IncidentState = INITIAL_STATE,
	action: IncidentAction
) => {
	switch (action.type) {
		case IncidentTypes.CREATE_INCIDENT_SUCCESS:
			return {
				...state,
				incidents: [...state.incidents, action.payload],
				error: null,
			};
		case IncidentTypes.FETCH_USER_INCIDENTS_START:
		case IncidentTypes.RESET_INCIDENT_DATE_START:
			return {
				...state,
				error: null,
			};
		case IncidentTypes.FETCH_USER_INCIDENTS_SUCCESS:
		case IncidentTypes.DELETE_INCIDENT_SUCCESS:
			return {
				...state,
				incidents: action.payload,
				error: null,
			};
		case IncidentTypes.RESET_INCIDENT_DATE_SUCCESS:
			return {
				...state,
				incidents: [
					...state.incidents.filter(
						(incident) => incident.inc_uid !== action.payload.inc_uid
					),
					action.payload,
				],
			};
		case IncidentTypes.POST_COMMENT:
			return {
				...state,
				incidents: [
					...state.incidents.map((incident) =>
						incident.inc_uid === action.payload.inc_uid
							? incident.addComment(action.payload)
							: incident
					),
				],
			};
		case IncidentTypes.DELETE_COMMENT:
		case IncidentTypes.UPDATE_COMMENT:
		case IncidentTypes.INCIDENT_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
