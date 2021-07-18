import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import UserDashboardPage from "./pages/user-dashboard-page/user-dashboard-page.component";
import UserProfilePage from "./pages/user-profile-page/user-profile-page.component";
import Navbar from "./components/navbar/navbar-main/navbar.component";
import { AppContainer } from "./App.styles";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./redux/user/user.action";

import { selectCurrentUser } from "./redux/user/user.selector";
import { State } from "./redux/root-reducer";
import PrivateRoute from "./components/common/private-route/private-route.component";

function App() {
	const dispatch = useDispatch();
	const currentUser = useSelector<State>((state) => selectCurrentUser(state));

	const checkUser = () => dispatch(checkUserSession());

	useEffect(() => {
		if (!currentUser) {
			checkUser();
		}
	}, [currentUser]);

	return (
		<AppContainer>
			<Navbar />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (currentUser ? <UserDashboardPage /> : <HomePage />)}
				/>
				<Route
					exact
					path="/signup"
					render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
				/>
				<Route
					exact
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
				/>
				<PrivateRoute exact path="/dashboard">
					<UserDashboardPage />
				</PrivateRoute>
				<PrivateRoute exact path="/profile">
					<UserProfilePage />
				</PrivateRoute>
			</Switch>
		</AppContainer>
	);
}

export default App;
