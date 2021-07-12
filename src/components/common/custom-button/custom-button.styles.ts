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
	font-family: "Archivo", sans-serif;
	text-transform: uppercase;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
	font-stretch: 110%;
	font-variation-settings: "wdth" 110;
	font-style: italic;
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing ? letterSpacing : "0.1rem"};

	white-space: nowrap;
`;

const baseStyles = css<CustomButtonProps>`
	background: none;
`;

const activeStyles = css<CustomButtonProps>`
	font-weight: 900 !important;
	font-stretch: 90%;
	font-variation-settings: "wdth" 90;
	background-color: ${({ theme }) => theme.lightAccent};
`;

const colorStyles = css<CustomButtonProps>`
	color: ${({ theme }) => theme.light};
	border: 1px solid ${({ theme }) => theme.lightAccent};
	${({ active }) => (active ? activeStyles : baseStyles)};

	:hover {
		background-color: ${({ theme }) => theme.lightAccent}aa;
	}

	:focus {
		${activeStyles}
	}
	:active {
		transform: scale(0.95);
		${activeStyles}
	}
`;

export const CustomButtonMain = styled.button<CustomButtonProps>`
	display: grid;
	place-items: center;
	min-width: ${({ minWidth }) => minWidth};
	min-height: ${({ minHeight }) => minHeight};
	height: 60px;

	margin: ${({ margin }) => (margin ? margin : "20px")};
	padding: 0 22px;
	border-radius: 1rem;
	outline: none;

	cursor: pointer;
	transition: all 250ms ease;
	transform-origin: center;
	will-change: transform, font-weight;

	${colorStyles};

	:disabled {
		background-color: ${({ theme }) => theme.lightAccent}33 !important;
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
