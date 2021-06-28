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
	const dispatch = useDispatch();
	const currentUser = useSelector<State>((state) => selectCurrentUser(state));

	const signOut = () => dispatch(signOutUser());
	const handleSignOut = () => {
		if (currentUser) {
			signOut();
		} else {
			history.push("/signin");
		}
	};

	return (
		<SignOut onClick={handleSignOut}>Sign {currentUser ? "Out" : "In"}</SignOut>
	);
};

export default SignInOutButton;
