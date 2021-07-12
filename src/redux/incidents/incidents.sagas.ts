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
	SelectEffect,
} from "redux-saga/effects";
import {
	createIncidentSuccess,
	fetchIncidentsSuccess,
	incidentError,
} from "./incidents.actions";
import {
	CreateIncidentStart,
	FetchUserIncidentsStart,
} from "./incidents.action-types";
import IncidentTypes from "./incidents.types";
import { selectUID } from "../user/user.selector";
import { firestore } from "../../utils/firebase/firebase.utils";
import {
	CollectionReference,
	DocumentData,
	QueryDocumentSnapshot,
	QuerySnapshot,
	Timestamp,
} from "../../utils/firebase/types";
import { Query } from "@testing-library/react";
import Incident from "../../utils/classes/incident/incident";

export function* createNewIncident({
	payload,
}: CreateIncidentStart): Generator {
	try {
		const uid = yield select(selectUID);
		yield console.log("INCIDENT BEFORE UPLOAD: ", payload);

		const docRef = firestore.collection(`users/${uid}/incidents`);

		yield docRef.add(payload.getDataForFirebase()).then((snapshot) => {
			payload.inc_uid = snapshot.id;
		});

		yield console.log("INCIDENT AFTER UPLOAD: ", payload);

		yield docRef.doc(payload.inc_uid).update({ inc_uid: payload.inc_uid });

		yield put(createIncidentSuccess(payload));
	} catch (err) {
		yield put(incidentError(err.message));
	}
}

export function* onCreateNewIncident() {
	yield takeLatest(IncidentTypes.CREATE_INCIDENT_START, createNewIncident);
}

export function* fetchIncidents(): Generator<SelectEffect | PutEffect> | Query {
	try {
		// FETCH INCIDENTS FROM FIREBASE
		const uid = yield select(selectUID);

		const incidentsRef: QuerySnapshot = yield firestore
			.collection(`users/${uid}/incidents`)
			.orderBy("incident_date", "asc")
			.get();

		const incidents: Incident[] = yield incidentsRef.docs.map((doc) =>
			doc.data()
		);

		yield console.log(
			"INCIDENTS: ",
			incidents.map((incident) => new Incident(incident))
		);

		yield put(
			fetchIncidentsSuccess(incidents.map((incident) => new Incident(incident)))
		);
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