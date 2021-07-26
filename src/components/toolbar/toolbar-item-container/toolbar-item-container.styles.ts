import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ToolbarContainerProps } from "./types";

const closedStyles = css`
	max-width: 6vw;
	background-color: ${({ theme }) => theme.main};
	border: none;
`;

const openStyles = css<ToolbarContainerProps>`
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "52vw")};
	/* grid-template-columns: 1fr auto 136px; */
	background-color: none;
	border: 1px solid ${({ theme }) => theme.lightAccent};
`;

export const ToolbarItemWrapper = styled.form<ToolbarContainerProps>`
	display: grid;

	place-items: center;
	width: 100%;
	min-width: 120px;
	height: 60px;
	border-radius: 25px;
	grid-template-columns: 1fr;

	position: relative;

	${({ open }) => (open ? openStyles : closedStyles)}
`;
