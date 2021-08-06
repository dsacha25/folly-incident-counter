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
import { feedError } from "./feed.actions";

// FETCH FEED
export function* fetchFeed(): Generator {
	try {
		const uid = yield select(selectUID);

		const freindships: string[] = [];

		/// SEARCH FREINDSHIPS

		yield firestore
			.collection(`incidents`)
			.where(new FieldPath("user", "user_uid"), "array-contains-any", [
				uid,
				...freindships,
			]);
	} catch (err) {
		yield put(feedError(err.message));
	}
}

export function* onFetchFeed() {
	yield takeLatest(FeedTypes.FETCH_FEED_INCIDENTS_START, fetchFeed);
}

export function* feedSagas() {
	yield all([call(onFetchFeed)]);
}
