import React, { useState, createContext, useContext } from "react";
import SignOut from "../sign-out/sign-out.component";
import Report from "../report/report.components";
import SearchBar from "../search-bar/search-bar.component";
import { ToolbarMainContainer } from "./toolbar-main.styles";
import { ClickAwayListener } from "@material-ui/core";

const INITIAL_STATE = {
	index: null,
	setIndex: (index: number | null) => {},
};

interface ToolbarState {
	index: number | null;
	setIndex: (index: number | null) => void;
}

const ToolbarContext = createContext<ToolbarState>(INITIAL_STATE);

const ToolbarMain = () => {
	const [index, setTab] = useState<number | null>(null);

	const setIndex = (i: number | null) => {
		console.log("INDEX: ", i);
		return setTab(i);
	};

	return (
		<ToolbarContext.Provider value={{ index, setIndex }}>
			<ClickAwayListener onClickAway={() => setIndex(null)}>
				<ToolbarMainContainer>
					<SearchBar />
					<Report />
					<SignOut />
				</ToolbarMainContainer>
			</ClickAwayListener>
		</ToolbarContext.Provider>
	);
};

export const useToolbarContext = () => useContext(ToolbarContext);

export default ToolbarMain;
