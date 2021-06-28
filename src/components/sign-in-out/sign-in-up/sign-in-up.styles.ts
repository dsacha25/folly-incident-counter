import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

import theme from "../../../theme";

export const SignInUpContainer = styled.div`
	display: grid;
	place-items: flex-start stretch;
	align-self: center;
	width: 100%;
	height: 100%;
	max-width: 40vw;
	max-height: 30vh;

	border: 1px solid ${({ theme }) => theme.lightAccent};
	background-color: ${({ theme }) => theme.main}33;
	border-radius: 2px;
	opacity: 0.9;

	/* padding: 40px; */
`;

export const ButtonContainer = styled.div`
	display: grid;
	place-items: center;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	height: 100%;
`;

export const SignInButton = styled(CustomButton)`
	background-color: ${theme.dark};
	color: ${theme.lightAccent};
`;
