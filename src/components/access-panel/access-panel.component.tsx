import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
	AccessPanelContainer,
	PanelButton,
	PanelPicture,
} from "./access-panel.styles";
import { State } from "../../redux/root-reducer";
import { User } from "../../redux/user/types";
import { setTabDashboard } from "../../redux/tabs/tabs.action";

const AccessPanel = () => {
	const dispatch = useDispatch();

	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const setTab = (index: number) => dispatch(setTabDashboard(index));

	const [activeTab, setActiveTab] = useState<number>(0);

	const handleSelectTab = (e: React.FormEvent<HTMLButtonElement>) => {
		const { id } = e.currentTarget;

		setActiveTab(parseInt(id));
		setTab(parseInt(id));

		// CONNECT TO REDUX
	};

	return (
		<AccessPanelContainer>
			<PanelPicture photoURL={user?.photoURL} />
			<PanelButton id="0" onClick={handleSelectTab} active={activeTab === 0}>
				Feed
			</PanelButton>
			<PanelButton id="1" onClick={handleSelectTab} active={activeTab === 1}>
				Profile
			</PanelButton>
			<PanelButton id="2" onClick={handleSelectTab} active={activeTab === 2}>
				Incidents
			</PanelButton>
			<PanelButton id="3" onClick={handleSelectTab} active={activeTab === 3}>
				Friends
			</PanelButton>
			<PanelButton id="4" onClick={handleSelectTab} active={activeTab === 4}>
				Settings
			</PanelButton>
		</AccessPanelContainer>
	);
};

export default AccessPanel;
