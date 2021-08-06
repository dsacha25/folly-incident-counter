import {
	all,
	call,
	CallEffect,
	put,
	PutEffect,
	SagaReturnType,
	select,
	SelectEffect,
	takeLatest,
} from "redux-saga/effects";
import Incident from "../../utils/classes/incident/incident";
import {
	auth,
	FieldPath,
	firestore,
	getCurrentUser,
	storage,
} from "../../utils/firebase/firebase.utils";
import {
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	Query,
	QueryDocumentSnapshot,
	QuerySnapshot,
	UserCredential,
} from "../../utils/firebase/types";

import {
	fetchProfileIncidentsSuccess,
	fetchProfileInfoSuccess,
	setProfileError,
} from "./profile.action";
import {
	FetchProfileIncidentsSuccessAction,
	FetchProfileInfoStartAction,
} from "./profile.action-types";
import ProfileTypes from "./profile.types";
import { Profile } from "./types";
import { sortBy } from "lodash";

// FETCH PROFILE INCIDENTS
export function* fetchProfileIncidents({
	payload,
}: FetchProfileIncidentsSuccessAction) {
	try {
		const incidentsRef: QuerySnapshot = yield firestore
			.collection(`incidents`)
			.where(new FieldPath("user", "user_uid"), "==", payload)
			.get();

		const incidents: Incident[] = yield incidentsRef.docs.map((doc) =>
			doc.data()
		);

		const sorted: Incident[] = sortBy(incidents, "incident_date");

		yield put(
			fetchProfileIncidentsSuccess(
				sorted.map((incident) => new Incident(incident))
			)
		);
	} catch (err) {
		put(setProfileError(err));
	}
}

export function* onFetchProfileIncidents() {
	yield takeLatest(
		ProfileTypes.FETCH_PROFILE_INCIDENTS_START,
		fetchProfileIncidents
	);
}

// FETCH PROFILE INFO
export function* fetchProfileInfo({
	payload,
}: FetchProfileInfoStartAction): Generator | Query {
	try {
		const user_doc: DocumentSnapshot = yield firestore
			.doc(`users/${payload}`)
			.get();

		const user_data: DocumentData | undefined = yield user_doc.data();

		yield console.log("DATA: ", user_data);

		if (!user_data) return null;

		const user_info: Profile = {
			displayName: user_data.displayName,
			email: user_data.email,
			photoURL: user_data.photoURL,
		};

		yield put(fetchProfileInfoSuccess(user_info));
	} catch (err) {
		put(setProfileError(err));
	}
}

export function* onFetchProfileInfo() {
	yield takeLatest(ProfileTypes.FETCH_PROFILE_INFO_START, fetchProfileInfo);
}

export function* profileSagas() {
	yield all([call(onFetchProfileInfo), call(onFetchProfileIncidents)]);
}
