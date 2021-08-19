import React from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "../../common/custom-button/custom-button.component";
import {
	SignInUpContainer,
	SignInButton,
	ButtonContainer,
} from "./sign-in-up.styles";

const SignInUp = () => {
	const history = useHistory();

	return (
		<SignInUpContainer>
			<ButtonContainer>
				<CustomButton onClick={() => history.push("/signup")}>
					Sign Up
				</CustomButton>
				<SignInButton onClick={() => history.push("/signin")}>
					Log In
				</SignInButton>
			</ButtonContainer>
		</SignInUpContainer>
	);
};

export default SignInUp;
