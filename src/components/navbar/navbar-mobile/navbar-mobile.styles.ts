import styled from "styled-components";
import MenuIcon from "../../../assets/menu-icon/MenuIcon.png";
import CustomButton from "../../common/custom-button/custom-button.component";

export const NavbarMobileContainer = styled.div`
	display: none;
	place-items: center;
	width: 100%;
	height: 100%;
	grid-column: 3 / 3;

	@media screen and (max-width: 800px) {
		display: grid;
	}
`;

export const NavMenuButton = styled(CustomButton)`
	width: 40px;
	height: 40px;

	margin: 0;
	padding: 0;

	border: none;
	border-radius: 20px;

	position: relative;

	background: url(${MenuIcon});
	background-repeat: no-repeat;
	background-size: 70%;
	background-position: center;

	:hover {
		background-color: ${({ theme }) => theme.main};
	}
`;
