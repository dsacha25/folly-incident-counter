import { MouseEventHandler } from "react";
import styled from "styled-components";
import { SearchBarResultsProps } from "./types";

export const SearchBarResultsContainer = styled.div<SearchBarResultsProps>`
	display: ${({ users }) => (users.length > 0 ? "grid" : "none")};
	place-items: flex-start center;
	padding: 10px;

	width: 80%;
	height: 100%;
	min-height: 200px;
	max-height: 40vh;

	position: absolute;
	top: 80px;

	border: 1px solid ${({ theme }) => theme.lightAccent};
	border-radius: 30px;
	background-color: ${({ theme }) => theme.dark};
`;

interface SearchBarItemProps {
	onClick: () => void;
}

export const SearchBarItem = styled.div<SearchBarItemProps>`
	display: grid;
	place-items: center;
	width: 100%;
	height: 60px;
	border-radius: 2rem;
	padding: 3px 0;

	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.lightAccent}33;
	}

	:active {
		background-color: ${({ theme }) => theme.lightAccent}99;
	}
`;
