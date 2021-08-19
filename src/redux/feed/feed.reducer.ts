import FeedActions, { FeedState } from "./feed.action-types";
import FeedTypes from "./feed.types";

const INITIAL_STATE = {
	feedIncidents: [],
	fetching: false,
	error: null,
};

export const feedRecuder = (
	state: FeedState = INITIAL_STATE,
	action: FeedActions
) => {
	switch (action.type) {
		case FeedTypes.FETCH_FEED_INCIDENTS_START:
			return {
				...state,
				fetching: true,
				error: null,
			};

		case FeedTypes.FETCH_FEED_INCIDENTS_SUCCESS:
			return {
				...state,
				feedIncidents: action.payload,
				fetching: false,
				error: null,
			};

		case FeedTypes.FEED_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
