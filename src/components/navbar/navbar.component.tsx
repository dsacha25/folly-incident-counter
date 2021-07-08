import React from "react";
import CustomInput from "../common/custom-input/custom-input.component";
import CustomButton from "../common/custom-button/custom-button.component";
import { NavbarContainer, NavbarLogo, NavSearchBar } from "./navbar.styles";
import SignInOutButton from "../sign-in-out/sign-out/sign-in-out-button.component";
import { useHistory } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();

	const goHome = () => {
		history.push("/");
	};
	return (
		<NavbarContainer>
			<NavbarLogo onClick={goHome} />
			<NavSearchBar>
				{/* <CustomInput height="20px" type="text" placeholder="Find Friends" />
				<CustomButton height="40px" fontSize="10px" margin="0px">
					Search
				</CustomButton> */}
			</NavSearchBar>
			<SignInOutButton />
		</NavbarContainer>
	);
};

export default Navbar;
