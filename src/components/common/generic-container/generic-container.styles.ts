import styled from "styled-components";
import BorderStyles from "../styles/border/border.styles";
import { GenericContainerStyleProps } from "./types";

export const GenericContainerWrapper = styled.div<GenericContainerStyleProps>`
	display: grid;
	place-items: center;
	grid-template-rows: 80px 1fr;

	width: 100%;
	height: 100%;
	min-width: 770px;
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "40vw")};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "40vh")};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
	margin-top: 10px;
	overflow: hidden;
	${BorderStyles};
	border-radius: 36px;
`;

export const ContainerHeader = styled.div`
	display: grid;
	place-items: center;
	width: 95%;
	height: 100%;
	max-height: 60px;

	border-bottom: 1px solid ${({ theme }) => theme.lightAccent};

	margin-bottom: 20px;
`;

export const HeaderText = styled.h4`
	font-style: italic;
	font-size: 40px;
	font-weight: 200;
	font-stretch: 100%;
	justify-self: flex-start;
	margin: 0;
`;
