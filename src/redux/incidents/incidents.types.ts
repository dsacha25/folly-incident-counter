enum IncidentTypes {
	CREATE_INCIDENT_START = "CREATE_INCIDENT_START",
	CREATE_INCIDENT_SUCCESS = "CREATE_INCIDENT_SUCCESS",
	FETCH_USER_INCIDENTS_START = "FETCH_USER_INCIDENTS_START",
	FETCH_USER_INCIDENTS_SUCCESS = "FETCH_USER_INCIDENTS_SUCCESS",
	UPDATE_INCIDENT_START = "UPDATE_INCIDENT_START",
	UPDATE_INCIDENT_SUCCESS = "UPDATE_INCIDENT_SUCCESS",
	DELETE_INCIDENT_START = "DELETE_INCIDENT_START",
	DELETE_INCIDENT_SUCCESS = "DELETE_INCIDENT_SUCCESS",
	POST_COMMENT_START = "POST_COMMENT_START",
	POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS",
	DELETE_COMMENT_START = "DELETE_COMMENT_START",
	DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS",
	UPDATE_COMMENT_START = "UPDATE_COMMENT_START",
	UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS",
	INCIDENT_ERROR = "INCIDENT_ERROR",
}

export default IncidentTypes;
