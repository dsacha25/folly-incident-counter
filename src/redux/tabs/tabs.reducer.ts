import TabsActions from "./tabs.action-types";
import TabsTypes from "./tabs.types";

export interface TabsState {
	dashboardTab: number;
}

const INITIAL_STATE = {
	dashboardTab: 0,
};

export const tabsReducer = (
	state: TabsState = INITIAL_STATE,
	action: TabsActions
) => {
	switch (action.type) {
		case TabsTypes.SET_TAB_DASHBOARD:
			return { ...state, dashboardTab: action.payload };

		default:
			return state;
	}
};
