import IncidentTypes from "./incidents.types";
import IncidentAction from "./incidents.action-types";
import Incident from "../../utils/classes/incident/incident";
import { filter } from "lodash";

export type IncidentState = {
	incidents: Incident[];
	fetching: boolean;
	error: string | null;
};

const INITIAL_STATE = {
	incidents: [],
	fetching: false,
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
				fetching: false,
				error: null,
			};

		case IncidentTypes.FETCH_USER_INCIDENTS_START:
			return {
				...state,
				fetching: true,
				error: null,
			};

		case IncidentTypes.FETCH_USER_INCIDENTS_SUCCESS:
		case IncidentTypes.UPDATE_INCIDENT_SUCCESS:
			return {
				...state,
				incidents: action.payload,
				fetching: false,
				error: null,
			};

		case IncidentTypes.DELETE_INCIDENT_SUCCESS:
			return {
				...state,
				incidents: filter(
					state.incidents,
					(incident) => incident.inc_uid !== action.payload
				),
				fetching: false,
				error: null,
			};

		case IncidentTypes.POST_COMMENT_START:
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
		case IncidentTypes.DELETE_COMMENT_START:
		case IncidentTypes.UPDATE_COMMENT_START:
		case IncidentTypes.INCIDENT_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
