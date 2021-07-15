import TabsTypes from "./tabs.types";

export interface SetTabDashboard {
	type: TabsTypes.SET_TAB_DASHBOARD;
	payload: number;
}

type TabsActions = SetTabDashboard;

export default TabsActions;
