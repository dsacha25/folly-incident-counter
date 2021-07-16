import React from "react";
import CustomInput from "../common/custom-input/custom-input.component";
import CustomButton from "../common/custom-button/custom-button.component";
import {
	NavbarContainer,
	NavbarLogo,
	NavButton,
	NavControls,
} from "./navbar.styles";
import SignInOutButton from "../sign-in-out/sign-out/sign-in-out-button.component";
import { useHistory } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { BiMessageSquare } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";

const Navbar = () => {
	const history = useHistory();

	const goHome = () => {
		history.push("/");
	};
	return (
		<NavbarContainer>
			<NavbarLogo onClick={goHome} />
			<NavControls>
				<NavButton>
					<BiMessageSquare size="25px" />
				</NavButton>
				<NavButton>
					<FiBell size="25px" />
				</NavButton>
				<NavButton>
					<BiQuestionMark size="32px" />
				</NavButton>
			</NavControls>
			<SignInOutButton />
		</NavbarContainer>
	);
};

export default Navbar;
