import { createSelector } from "reselect";
import Incident from "../../utils/classes/incident/incident";
import { State } from "../root-reducer";
import { FeedState } from "./feed.action-types";

const selectFeed = (state: State) => state.feed;

export const selectFeedIncidents = createSelector<State, FeedState, Incident[]>(
	selectFeed,
	(feed) => feed.feedIncidents
);

export const selectIsFetchingFeed = createSelector<State, FeedState, boolean>(
	selectFeed,
	(feed) => feed.fetching
);

export const selectFeedError = createSelector<State, FeedState, string | null>(
	selectFeed,
	(feed) => feed.error
);
