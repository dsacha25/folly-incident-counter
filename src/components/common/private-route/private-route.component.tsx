import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const PrivateRoute = (props: RouteProps) => {
	const currentUser = useSelector<State, User>((state) =>
		selectCurrentUser(state)
	);

	return (
		<Route
			exact={props.exact}
			path={props.path}
			render={() => (currentUser ? props.children : <Redirect to="/" />)}
		/>
	);
};

export default PrivateRoute;
