import {
	all,
	call,
	put,
	select,
	PutEffect,
	takeLatest,
	SelectEffect,
} from "redux-saga/effects";

import { selectUID } from "../user/user.selector";
import { FieldPath, firestore } from "../../utils/firebase/firebase.utils";
import { QuerySnapshot } from "../../utils/firebase/types";
import { Query } from "@testing-library/react";

import FeedTypes from "./feed.types";
import { feedError, fetchFeedIncidentsSuccess } from "./feed.actions";
import { filter, flatten, flatMap } from "lodash";
import Incident from "../../utils/classes/incident/incident";
import getErrorMessage from "../../utils/methods/get-error-message.method";

// FETCH FEED
export function* fetchFeed(): Generator | Query {
	try {
		const uid = yield select(selectUID);

		/// SEARCH FREINDSHIPS
		const friendsRef: QuerySnapshot = yield firestore
			.collection("friendships")
			.where("users", "array-contains", uid)
			.get();

		const friendships: string[] = flatMap(friendsRef.docs, (friend) =>
			filter(friend.data().users, (user_uid) => user_uid !== uid)
		);

		// console.log("FRIENSHIPS: ", friendships);

		const feedIncidentsRef: QuerySnapshot = yield firestore
			.collection(`incidents`)
			.where(new FieldPath("user", "user_uid"), "in", [uid, ...friendships])
			.orderBy("incident_date", "desc")
			.get();

		const feedIncidents: Incident[] = yield feedIncidentsRef.docs.map((doc) =>
			doc.data()
		);

		// console.log("FEED INCIDENTS: ", feedIncidents);

		yield put(
			fetchFeedIncidentsSuccess(
				feedIncidents.map((incident) => new Incident(incident))
			)
		);
	} catch (err) {
		yield put(feedError(getErrorMessage(err)));
	}
}

export function* onFetchFeed() {
	yield takeLatest(FeedTypes.FETCH_FEED_INCIDENTS_START, fetchFeed);
}

export function* feedSagas() {
	yield all([call(onFetchFeed)]);
}
