import { all, call } from "redux-saga/effects";
import { feedSagas } from "./feed/feed.sagas";
import { incidentSagas } from "./incidents/incidents.sagas";
import { profileSagas } from "./profile/profile.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
	yield all([
		call(userSagas),
		call(incidentSagas),
		call(profileSagas),
		call(feedSagas),
	]);
}
