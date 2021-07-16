import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { State } from "../../../redux/root-reducer";
import { signOutUser } from "../../../redux/user/user.action";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import CustomButton from "../../common/custom-button/custom-button.component";
import { SignOut } from "./sign-in-out-button.styles";

const SignInOutButton = () => {
	const history = useHistory();
	const currentUser = useSelector<State>((state) => selectCurrentUser(state));

	const handleSignOut = () => !currentUser && history.push("/signin");

	return !currentUser ? (
		<SignOut onClick={handleSignOut}>Sign In</SignOut>
	) : null;
};

export default SignInOutButton;
