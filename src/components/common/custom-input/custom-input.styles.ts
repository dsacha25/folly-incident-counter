import styled, { css } from "styled-components";
import { StyleTypes } from "../custom-button/types";
import CustomInputTypes from "./types";

const shrinkLabelStyles = css<CustomInputTypes>`
	display: unset;
	align-items: unset;
	top: -20px;
	font-size: 16px;
	color: ${({ theme }) => theme.main};
`;

const inputStyles = css<StyleTypes>`
	background: ${({ theme }) => theme.light};
	color: ${({ theme }) => theme.main};
	padding: ${({ padding }) => (padding ? padding : "10px 25px")};
	display: block;
	width: 100%;
	height: ${({ height }) => (height ? height : "100%")};
	border: none;
	border-radius: 2rem;
	border: 1px solid ${({ theme }) => theme.dark};
	line-height: 40px;
	max-width: -webkit-fill-available;

	::placeholder {
		color: ${({ theme }) => theme.darkAccent};
		font-size: 1.25rem;
		font-variation-settings: "wdth" 90;
	}

	font-family: "Archivo", sans-serif;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "26px")};
	font-style: italic;
	font-weight: 400;

	letter-spacing: 0.15rem;

	cursor: pointer;

	&:focus {
		outline: none;
	}

	&:focus ~ label {
		${shrinkLabelStyles}
	}

	&:disabled {
		background: #44444422;
		border-bottom: unset;
		cursor: unset;
	}
`;

export const GroupContainer = styled.div<CustomInputTypes>`
	position: relative;
	margin: ${({ margin }) => margin && margin};
	flex: 1;
	width: 100%;
	display: inline;

	input[type="password"] {
		letter-spacing: 0.3rem;
		font-size: 36px;
	}
`;

const errorStyles = css`
	background-color: #ffe9e9 !important;
	border-color: #ff3636 !important;
	outline: 0;
	box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.4) !important;
`;

export const FormInputComponent = styled.input<CustomInputTypes>`
	min-width: ${({ minWidth }) => minWidth};
	max-width: ${({ maxWidth }) => maxWidth};
	max-height: ${({ maxHeight }) => maxHeight};

	${inputStyles}

	${({ error }) => error && errorStyles};

	&:focus {
		background-color: #fff;
		border-color: #80bdff;
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
	}

	&::-webkit-calendar-picker-indicator {
		cursor: pointer;
	}
`;

export const FormInputLabel = styled.label<CustomInputTypes>`
	display: flex;
	align-items: center;

	color: ${({ theme }) => theme.darkAccent};
	font-size: 22px;
	font-weight: 200;
	position: absolute;
	pointer-events: none;
	left: 20px;
	top: 0;
	bottom: 0;
	font-style: italic;
	transition: 300ms ease all;
	width: 200px;

	letter-spacing: 0.15rem;

	&.shrink {
		${shrinkLabelStyles}
	}
`;
