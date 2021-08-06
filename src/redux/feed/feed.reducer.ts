import FeedActions, { FeedState } from "./feed.action-types";
import FeedTypes from "./feed.types";

const INITIAL_STATE = {
	feedIncidents: [],
	error: "",
};

export const feedRecuder = (
	state: FeedState = INITIAL_STATE,
	action: FeedActions
) => {
	switch (action.type) {
		case FeedTypes.FETCH_FEED_INCIDENTS_SUCCESS:
			return {
				...state,
				feedIncidents: action.payload,
			};

		case FeedTypes.FEED_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
