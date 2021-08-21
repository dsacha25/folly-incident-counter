import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
	AccessPanelContainer,
	PanelButtonText,
	PanelButton,
	PanelPicture,
	PanelButtonIcon,
} from "./access-panel.styles";
import { State } from "../../redux/root-reducer";
import { User } from "../../redux/user/types";
import { setTabDashboard } from "../../redux/tabs/tabs.action";
import { AiFillSetting } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiCommentError } from "react-icons/bi";
import { CgProfile, CgFeed } from "react-icons/cg";

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
				<PanelButtonText>Feed</PanelButtonText>
				<PanelButtonIcon>
					<CgFeed size="80%" />
				</PanelButtonIcon>
			</PanelButton>
			<PanelButton id="1" onClick={handleSelectTab} active={activeTab === 1}>
				<PanelButtonText>Profile</PanelButtonText>
				<PanelButtonIcon>
					<CgProfile size="60%" />
				</PanelButtonIcon>
			</PanelButton>
			<PanelButton id="2" onClick={handleSelectTab} active={activeTab === 2}>
				<PanelButtonText>Incidents</PanelButtonText>
				<PanelButtonIcon>
					<BiCommentError size="65%" />
				</PanelButtonIcon>
			</PanelButton>
			<PanelButton id="3" onClick={handleSelectTab} active={activeTab === 3}>
				<PanelButtonText>Friends</PanelButtonText>
				<PanelButtonIcon>
					<FaUserFriends size="60%" />
				</PanelButtonIcon>
			</PanelButton>
			<PanelButton id="4" onClick={handleSelectTab} active={activeTab === 4}>
				<PanelButtonText>Settings</PanelButtonText>
				<PanelButtonIcon>
					<AiFillSetting size="60%" />
				</PanelButtonIcon>
			</PanelButton>
		</AccessPanelContainer>
	);
};

export default AccessPanel;
