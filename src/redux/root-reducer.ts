import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { incidentReducer } from "./incidents/incidents.reducer";
import { tabsReducer } from "./tabs/tabs.reducer";
import { profileReducer } from "./profile/profile.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

const rootReducer = combineReducers({
	user: userReducer,
	incidents: incidentReducer,
	tabs: tabsReducer,
	profile: profileReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type State = ReturnType<typeof rootReducer>;
