import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

export const NavControlContainer = styled.div`
	display: grid;
	place-items: center;
	width: 160px;
	grid-template-columns: repeat(3, 45px);
	padding: 0 20px;
	gap: 15px;

	grid-column: 3 / 3;
`;

export const NavButton = styled(CustomButton)`
	border-radius: 2rem;
	margin: 0;
	padding: 0;

	width: 100%;
	height: 45px;

	border-color: ${({ theme }) => theme.lightAccent};

	position: relative;
`;
