import styled from "styled-components";
import FollyLogoStmt from "../../assets/folly_brand/FollyLogoStatement.png";

export const HomePageMain = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	max-height: 100vh;
	overflow-y: auto;

	@media screen and (max-width: 800px) {
		max-width: 100vw;
	}
`;

export const LogoSplash = styled.div`
	display: grid;
	width: -webkit-fill-available;
	height: 300px;
	background: url(${FollyLogoStmt});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;

export const HomePageContent = styled.div`
	display: grid;
	width: 100%;
	height: 60vh;

	place-items: center;
	grid-template-columns: 1fr 1fr;
`;
