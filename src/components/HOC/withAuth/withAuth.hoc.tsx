import React, { ComponentProps, ComponentType } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const withAuth = (Component: ComponentType) => (props: any) => {
	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	return user ? <Component {...props} /> : null;
};

export default withAuth;
