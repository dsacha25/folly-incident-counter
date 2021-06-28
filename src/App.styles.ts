import styled from "styled-components";

export const AppContainer = styled.div`
	text-align: center;
	display: grid;
	grid-template-rows: auto 1fr;

	background-color: ${({ theme }) => theme.dark};
	color: ${({ theme }) => theme.light};
`;
