import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { incidentReducer } from "./incidents/incidents.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [""],
};

const rootReducer = combineReducers({
	user: userReducer,
	incidents: incidentReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type State = ReturnType<typeof rootReducer>;
