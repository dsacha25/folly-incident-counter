import styled from "styled-components";

export const ToolbarIconButton = styled.button`
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;

	outline: none;
	border: none;
	background: none;

	padding: 0;

	:hover {
		background-color: ${({ theme }) => theme.light}33;
	}
	:active {
		background-color: ${({ theme }) => theme.light}99;
	}

	svg {
		color: ${({ theme }) => theme.light};
	}
`;
