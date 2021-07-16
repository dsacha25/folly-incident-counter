import styled from "styled-components";

export const GenericContainerWrapper = styled.div`
	display: grid;
	place-items: center;
	grid-template-rows: 55px 1fr;

	width: 100%;
	height: 100%;

	border: 1px solid ${({ theme }) => theme.lightAccent};
	border-radius: 30px;
	overflow: hidden;
`;

export const ContainerHeader = styled.div`
	display: grid;
	place-items: flex-start center;
	width: 95%;
	height: 100%;

	border-bottom: 1px solid ${({ theme }) => theme.lightAccent};
`;

export const HeaderText = styled.h4`
	font-style: italic;
	font-size: 40px;
	font-weight: 200;
	font-stretch: 100%;
`;
