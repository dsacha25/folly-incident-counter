import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { HomePageContent, HomePageMain, LogoSplash } from "./home-page.styles";
import {
	BackgroundLogo,
	PageContentContainer,
	PageMain,
} from "../page-styles/page-styles.styles";
import SignInUp from "../../components/sign-in-out/sign-in-up/sign-in-up.component";

const HomePage = () => {
	return (
		<PageMain>
			<BackgroundLogo />
			<PageContentContainer>
				<HomePageContent>
					<LogoSplash />
					<SignInUp />
				</HomePageContent>
			</PageContentContainer>
		</PageMain>
	);
};

HomePage.propTypes = {};

export default HomePage;
