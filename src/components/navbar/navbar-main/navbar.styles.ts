import styled from "styled-components";
import FollyLogoStmt from "../../../assets/folly_brand/FollyLogoStatement.png";
import CustomButton from "../../common/custom-button/custom-button.component";

export const NavbarContainer = styled.div`
	display: grid;
	width: 100vw;
	max-width: 100vw;
	height: 80px;
	place-items: center flex-end;
	grid-template-columns: auto 1fr 1fr;
	z-index: 1;
`;

export const NavbarLogo = styled.div`
	width: 200px;
	height: inherit;
	background: url(${FollyLogoStmt});
	background-repeat: no-repeat;
	background-size: contain;

	grid-column: 1 / 2;

	cursor: pointer;
`;
