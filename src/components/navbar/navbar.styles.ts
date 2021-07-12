import styled from "styled-components";
import FollyLogoStmt from "../../assets/folly_brand/FollyLogoStatement.png";

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

export const NavSearchBar = styled.div`
	display: grid;
	place-items: center;
	width: 300px;
	grid-template-columns: 1fr auto;
	padding: 0 20px;

	grid-column: 3 / 3;
`;
