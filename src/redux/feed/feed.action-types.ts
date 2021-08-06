import Incident from "../../utils/classes/incident/incident";
import FeedTypes from "./feed.types";

export interface FeedState {
	feedIncidents: Incident[];
	error: string;
}

export interface FetchFeedIncidentsStartAction {
	type: FeedTypes.FETCH_FEED_INCIDENTS_START;
}

export interface FetchIncidentsSuccessAction {
	type: FeedTypes.FETCH_FEED_INCIDENTS_SUCCESS;
	payload: Incident[];
}

export interface FeedErrorAction {
	type: FeedTypes.FEED_ERROR;
	payload: string;
}

type FeedActions =
	| FetchFeedIncidentsStartAction
	| FetchIncidentsSuccessAction
	| FeedErrorAction;

export default FeedActions;
