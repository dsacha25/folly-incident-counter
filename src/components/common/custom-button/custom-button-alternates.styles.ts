import styled, { css } from "styled-components";
import CustomButton from "./custom-button.component";

interface Hidden {
	hidden?: boolean;
}

const displayStyles = css<Hidden>`
	display: ${({ hidden }) => (hidden ? "none" : "grid")};
`;

export const ButtonRight = styled(CustomButton)`
	margin: 0;
	border: none;
	height: 100%;
	background-color: ${({ theme }) => theme.lightAccent};
	border-radius: 0px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;

	:hover {
		background-color: ${({ theme }) => theme.lightAccent}55;
	}

	:active {
		transform: unset;
	}

	${displayStyles}
`;

export const ButtonLeft = styled(CustomButton)`
	margin: 0;
	border: none;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.warn};
	border-radius: 20px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	padding: 0;

	:hover {
		background-color: ${({ theme }) => theme.warn}55;
	}

	:focus,
	:active {
		transform: unset !important;
		background-color: ${({ theme }) => theme.warn};
	}
`;
