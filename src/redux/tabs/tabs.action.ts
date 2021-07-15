import TabsTypes from "./tabs.types";

export const setTabDashboard = (index: number) => ({
	type: TabsTypes.SET_TAB_DASHBOARD,
	payload: index,
});
