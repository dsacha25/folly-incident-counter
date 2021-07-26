import React, { useState, createContext, useContext } from "react";
import SignOut from "../sign-out/sign-out.component";
import Report from "../report/report.components";
import SearchBar from "../search-bar/search-bar.component";
import { ToolbarMainContainer } from "./toolbar-main.styles";
import { ClickAwayListener } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clearUserSearch } from "../../../redux/user/user.action";

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
	const dispatch = useDispatch();

	const clearSearch = () => dispatch(clearUserSearch());

	const [index, setTab] = useState<number | null>(null);

	const setIndex = (i: number | null) => setTab(i);

	const handleClickAway = () => {
		setIndex(null);
		clearSearch();
	};

	return (
		<ToolbarContext.Provider value={{ index, setIndex }}>
			<ClickAwayListener onClickAway={handleClickAway}>
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
