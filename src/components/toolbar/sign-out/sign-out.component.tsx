import React, { memo } from "react";
import ToolbarItemContainer from "../toolbar-item-container/toolbar-item-container.component";
import { useToolbarContext } from "../toolbar-main/toolbar-main.component";
import { SignOutButton, SignOutOpenContainer } from "./sign-out.styles";
import { IoPowerOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { State } from "../../../redux/root-reducer";

import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../../redux/user/user.action";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const SignOut = () => {
	const { index, setIndex } = useToolbarContext();

	const dispatch = useDispatch();
	const currentUser = useSelector<State>((state) => selectCurrentUser(state));

	const signOut = () => dispatch(signOutUser());
	const handleSignOut = () => currentUser && signOut();

	return (
		<ToolbarItemContainer
			onClick={() => setIndex(2)}
			open={index === 2}
			icon={<IoPowerOutline size="40px" />}
		>
			<SignOutOpenContainer>
				<SignOutButton onClick={handleSignOut}>Sign Out?</SignOutButton>
			</SignOutOpenContainer>
		</ToolbarItemContainer>
	);
};

export default memo(SignOut);
