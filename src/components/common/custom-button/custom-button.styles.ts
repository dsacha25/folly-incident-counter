import styled, { css } from "styled-components";
import CustomButtonProps from "./types";

const widthHeightStyles = css<CustomButtonProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

const sizeStyles = css<CustomButtonProps>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
`;

const queryProvidedDimensions = (props: CustomButtonProps) => {
	if (props.size) return sizeStyles;
	else if (props.width || props.height) {
		return widthHeightStyles;
	}
};

export const sizeWidthHeight = css`
	${queryProvidedDimensions};
`;

export const buttonFontBase = css<CustomButtonProps>`
	font-family: mr-eaves-modern, sans-serif;
	text-transform: uppercase;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing ? letterSpacing : "0.1rem"};

	white-space: nowrap;
`;

export const CustomButtonMain = styled.button<CustomButtonProps>`
	display: grid;
	place-items: center;

	height: 60px;
	color: ${({ theme, color }) => (color ? color : theme.dark)};

	background-color: ${({ theme, backgroundColor }) =>
		backgroundColor ? backgroundColor : theme.lightAccent};

	margin: ${({ margin }) => (margin ? margin : "20px")};
	padding: 0 22px;
	border-radius: 0.25rem;

	outline: none;
	border: none;
	cursor: pointer;
	transition: all 250ms ease;
	transform-origin: center;
	will-change: transform, font-weight;

	:focus {
		background-color: white;
		border: 2px solid;
		box-shadow: 0 0 0.25rem 0.15rem currentColor;
	}

	:hover {
		background-color: #eeeeee;
		color: #676771;
		border: 2px solid;
	}

	:active {
		transform: scale(0.95);
	}

	:disabled {
		background-color: ${({ theme }) => theme.lightAccent} !important;
		color: ${({ theme }) => theme.darkAccent} !important;
		cursor: unset;
		border: unset !important;

		:hover {
			border: unset !important;
		}
	}

	${sizeWidthHeight};
	${buttonFontBase};

	pointer-events: all !important;
`;
