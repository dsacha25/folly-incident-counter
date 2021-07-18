import React from "react";
import { NavControlContainer, NavButton } from "./navbar-controls.styles";
import { FiBell } from "react-icons/fi";
import { BiMessageSquare } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import withAuth from "../../HOC/withAuth/withAuth.hoc";

const NavbarControls = () => {
	return (
		<NavControlContainer>
			<NavButton>
				<BiMessageSquare size="25px" />
			</NavButton>
			<NavButton>
				<FiBell size="25px" />
			</NavButton>
			<NavButton>
				<BiQuestionMark size="32px" />
			</NavButton>
		</NavControlContainer>
	);
};

export default withAuth(NavbarControls);
