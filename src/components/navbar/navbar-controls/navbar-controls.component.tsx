import React, {
	useState,
	FormEvent,
	SyntheticEvent,
	createContext,
} from "react";
import { NavControlContainer, NavButton } from "./navbar-controls.styles";
import { FiBell } from "react-icons/fi";
import { BiMessageSquare } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import withAuth from "../../HOC/withAuth/withAuth.hoc";
import NotificationMain from "../../notifications/notif-main/notif-main.component";
import { ClickAwayListener } from "@material-ui/core";

const INITIAL_STATE = {
	messagesOpen: false,
	notifsOpen: false,
	setMessagesOpen: () => {},
	setNotifsOpen: () => {},
};

interface NavbarControlsState {
	messagesOpen: boolean;
	notifsOpen: boolean;
	setMessagesOpen: () => void;
	setNotifsOpen: () => void;
}

const NavbarControlsContext = createContext<NavbarControlsState>(INITIAL_STATE);

const NavbarControls = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpenNotifications = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setOpen(!open);
	};

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<NavControlContainer>
				<NavButton>
					<BiMessageSquare size="25px" />
				</NavButton>
				<NavButton onClick={handleOpenNotifications}>
					<FiBell size="25px" />
					<NotificationMain open={open} />
				</NavButton>
				<NavButton>
					<BiQuestionMark size="32px" />
				</NavButton>
			</NavControlContainer>
		</ClickAwayListener>
	);
};

export default withAuth(NavbarControls);
