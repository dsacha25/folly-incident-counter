import IncidentTypes from "./incidents.types";
import Incident from "../../utils/classes/incident/incident";

export type Comment = {
	comm_uid?: string;
	inc_uid: string;
	user_uid: string;
	comment: string;
};

export interface CreateIncidentStartAction {
	type: IncidentTypes.CREATE_INCIDENT_START;
	payload: Incident;
}

export interface CreateIncidentSuccessAction {
	type: IncidentTypes.CREATE_INCIDENT_SUCCESS;
	payload: Incident;
}

export interface FetchUserIncidentsStartAction {
	type: IncidentTypes.FETCH_USER_INCIDENTS_START;
}

export interface FetchUserIncidentsSuccessAction {
	type: IncidentTypes.FETCH_USER_INCIDENTS_SUCCESS;
	payload: Incident[];
}

export interface UpdateIncidentStartAction {
	type: IncidentTypes.UPDATE_INCIDENT_START;
	payload: Incident;
}

export interface UpdateIncidentSuccessAction {
	type: IncidentTypes.UPDATE_INCIDENT_SUCCESS;
	payload: Incident[];
}

export interface DeleteIncidentStartAction {
	type: IncidentTypes.DELETE_INCIDENT_START;
	payload: string;
}

export interface DeleteIncidentSuccessAction {
	type: IncidentTypes.DELETE_INCIDENT_SUCCESS;
	payload: string;
}

export interface PostCommentStartAction {
	type: IncidentTypes.POST_COMMENT_START;
	payload: Comment;
}

export interface PostCommentSuccessAction {
	type: IncidentTypes.POST_COMMENT_START;
	payload: Comment;
}

export interface UpdateCommentStartAction {
	type: IncidentTypes.UPDATE_COMMENT_START;
	payload: Comment;
}

export interface UpdateCommentSuccessAction {
	type: IncidentTypes.UPDATE_COMMENT_START;
	payload: Comment[];
}

export interface DeleteCommentStartAction {
	type: IncidentTypes.DELETE_COMMENT_START;
	payload: string;
}

export interface DeleteCommentSuccessAction {
	type: IncidentTypes.DELETE_COMMENT_START;
	payload: string;
}

export interface IncidentErrorAction {
	type: IncidentTypes.INCIDENT_ERROR;
	payload: string;
}

type IncidentAction =
	| CreateIncidentStartAction
	| CreateIncidentSuccessAction
	| FetchUserIncidentsStartAction
	| FetchUserIncidentsSuccessAction
	| UpdateIncidentStartAction
	| UpdateIncidentSuccessAction
	| DeleteIncidentStartAction
	| DeleteIncidentSuccessAction
	| PostCommentStartAction
	| PostCommentSuccessAction
	| UpdateCommentStartAction
	| UpdateCommentSuccessAction
	| DeleteCommentStartAction
	| DeleteCommentSuccessAction
	| IncidentErrorAction;

export default IncidentAction;
