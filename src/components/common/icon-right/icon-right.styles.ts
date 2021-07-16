import styled from "styled-components";
import { IconRightProps } from "./types";

export const IconRightContainer = styled.div`
	display: grid;
	place-items: center;

	width: 100%;
	height: 100%;
	max-height: 50px;

	grid-template-columns: auto 40px;

	svg {
		color: ${({ theme }) => theme.lightAccent};
	}
`;

interface DataProp {
	important?: boolean;
}

export const Data = styled.p<DataProp>`
	padding: 0;
	margin: 0;

	justify-self: flex-end;

	font-weight: ${({ important }) => (important ? 400 : 200)};
	font-style: italic;
	font-size: 28px;
`;
