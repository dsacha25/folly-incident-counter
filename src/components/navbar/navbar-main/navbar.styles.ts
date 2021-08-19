import styled from "styled-components";
import FollyLogoStmt from "../../../assets/folly_brand/FollyLogoStatement.png";

export const NavbarContainer = styled.div`
	display: grid;
	width: 100vw;
	max-width: 100vw;
	height: 80px;
	place-items: center flex-end;
	grid-template-columns: auto 1fr 1fr;
	z-index: 1;

	@media screen and (max-width: 800px) {
		grid-template-columns: auto 1fr 80px;
	}
`;

export const NavbarLogo = styled.div`
	width: 200px;
	height: inherit;
	background: url(${FollyLogoStmt});
	background-repeat: no-repeat;
	background-size: contain;

	grid-column: 1 / 2;

	cursor: pointer;

	@media screen and (max-width: 800px) {
		width: 140px;
		height: 50px;
		margin-left: 10px;
	}
`;
