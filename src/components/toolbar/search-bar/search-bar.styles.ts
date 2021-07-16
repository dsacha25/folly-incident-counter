import styled from "styled-components";

export const SearchBarOpenContainer = styled.div`
	display: grid;
	grid-template-columns: 60px 1fr auto;
	place-items: center;
	width: 100%;
	height: 100%;

	svg {
		color: ${({ theme }) => theme.lightAccent};
	}
`;
