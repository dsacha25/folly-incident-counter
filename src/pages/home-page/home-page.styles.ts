import styled from "styled-components";
import FollyLogoStmt from "../../assets/folly_brand/FollyLogoStatement.png";

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

	@media screen and (max-width: 800px) {
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: 40vh 60vh;
	}
`;
