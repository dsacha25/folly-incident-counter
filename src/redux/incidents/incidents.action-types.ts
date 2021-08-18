import IncidentTypes from "./incidents.types";
import Incident from "../../utils/classes/incident/incident";

export type Comment = {
	comm_uid?: string;
	inc_uid: string;
	user_uid: string;
	comment: string;
};

export interface CreateIncidentStart {
	type: IncidentTypes.CREATE_INCIDENT_START;
	payload: Incident;
}

export interface CreateIncidentSuccess {
	type: IncidentTypes.CREATE_INCIDENT_SUCCESS;
	payload: Incident;
}

export interface FetchUserIncidentsStart {
	type: IncidentTypes.FETCH_USER_INCIDENTS_START;
}

export interface FetchUserIncidentsSuccess {
	type: IncidentTypes.FETCH_USER_INCIDENTS_SUCCESS;
	payload: Incident[];
}

export interface ResetIncidentDateStart {
	type: IncidentTypes.RESET_INCIDENT_DATE;
	payload: Incident;
}

export interface DeleteIncidentStart {
	type: IncidentTypes.DELETE_INCIDENT_START;
	payload: string;
}

export interface DeleteIncidentSuccess {
	type: IncidentTypes.DELETE_INCIDENT_SUCCESS;
	payload: Incident;
}

export interface UpdateIncidentStart {
	type: IncidentTypes.UPDATE_INCIDENT_START;
	payload: Incident;
}

export interface UpdateIncidentSuccess {
	type: IncidentTypes.UPDATE_INCIDENT_SUCCESS;
	payload: Incident[];
}

export interface PostComment {
	type: IncidentTypes.POST_COMMENT;
	payload: Comment;
}

export interface UpdateComment {
	type: IncidentTypes.UPDATE_COMMENT;
	payload: Comment;
}

export interface DeleteComment {
	type: IncidentTypes.DELETE_COMMENT;
	payload: string;
}

export interface IncidentError {
	type: IncidentTypes.INCIDENT_ERROR;
	payload: string;
}

type IncidentAction =
	| CreateIncidentStart
	| CreateIncidentSuccess
	| FetchUserIncidentsStart
	| FetchUserIncidentsSuccess
	| ResetIncidentDateStart
	| DeleteIncidentStart
	| DeleteIncidentSuccess
	| UpdateIncidentStart
	| UpdateIncidentSuccess
	| PostComment
	| UpdateComment
	| DeleteComment
	| IncidentError;

export default IncidentAction;
