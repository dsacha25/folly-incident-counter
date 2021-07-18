import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { SignIn } from "./sign-in-out-button.styles";

const SignInButton = () => {
	const history = useHistory();

	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	return !user ? (
		<SignIn onClick={() => history.push("/signin")}>Sign In</SignIn>
	) : null;
};

export default SignInButton;
