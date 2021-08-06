import Incident from "../../utils/classes/incident/incident";
import FeedTypes from "./feed.types";

export const fetchFeedIncidentsStart = () => ({
	type: FeedTypes.FETCH_FEED_INCIDENTS_START,
});

export const fetchFeedIncidentsSuccess = (incidents: Incident[]) => ({
	type: FeedTypes.FETCH_FEED_INCIDENTS_SUCCESS,
	payload: incidents,
});

export const feedError = (error: string) => ({
	type: FeedTypes.FEED_ERROR,
	payload: error,
});
