import { createSelector } from "reselect";
import { State } from "../root-reducer";
import { TabsState } from "./tabs.reducer";

const selectTab = (state: State) => state.tabs;

export const selectDashboardTab = createSelector<State, TabsState, number>(
	selectTab,
	(tabs) => tabs.dashboardTab
);
