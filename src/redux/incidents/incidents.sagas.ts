import {
	all,
	call,
	put,
	select,
	CallEffect,
	Effect,
	PutEffect,
	SagaReturnType,
	takeLatest,
	SimpleEffect,
} from "redux-saga/effects";
import { createIncidentSuccess, incidentError } from "./incidents.actions";
import {
	CreateIncidentStart,
	FetchUserIncidentsStart,
} from "./incidents.action-types";
import IncidentTypes from "./incidents.types";
import { selectUID } from "../user/user.selector";
import { firestore } from "../../utils/firebase/firebase.utils";

export function* createNewIncident({
	payload,
}: CreateIncidentStart): Generator {
	try {
		const uid = yield select(selectUID);
		yield console.log("INCIDENT BEFORE UPLOAD: ", payload);

		yield firestore
			.collection(`customers/${uid}/incidents`)
			.add(payload.getDataForFirebase())
			.then((snapshot) => {
				payload.id = snapshot.id;
			});

		yield console.log("INCIDENT AFTER UPLOAD: ", payload);

		yield put(createIncidentSuccess(payload));
	} catch (err) {
		yield put(incidentError(err.message));
	}
}

export function* onCreateNewIncident() {
	yield takeLatest(IncidentTypes.CREATE_INCIDENT_START, createNewIncident);
}

export function* fetchIncidents(): Generator {
	try {
		// FETCH INCIDENTS FROM FIREBASE
		const uid = yield select(selectUID);
	} catch (err) {
		yield put(incidentError(err.message));
	}
}

export function* onFetchIncidents() {
	yield takeLatest(IncidentTypes.FETCH_USER_INCIDENTS_START, fetchIncidents);
}

export function* incidentSagas() {
	yield all([call(onCreateNewIncident), call(onFetchIncidents)]);
}
