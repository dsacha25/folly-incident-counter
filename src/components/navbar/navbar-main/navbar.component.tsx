import React from "react";
import { NavbarContainer, NavbarLogo } from "./navbar.styles";
import SignInButton from "../../sign-in-out/sign-out/sign-in-out-button.component";
import { useHistory } from "react-router-dom";
import NavbarControls from "../navbar-controls/navbar-controls.component";

const Navbar = () => {
	const history = useHistory();

	const goHome = () => {
		history.push("/");
	};

	return (
		<NavbarContainer>
			<NavbarLogo onClick={goHome} />
			<NavbarControls />
			<SignInButton />
		</NavbarContainer>
	);
};

export default Navbar;
