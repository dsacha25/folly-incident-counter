import styled from "styled-components";
import TriangleUp from "../../../assets/arrows/up/TriangleUp.png";
import TriangleDown from "../../../assets/arrows/down/TriangleDown.png";

export const PostControlsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	width: 100%;
	height: 100%;
	min-height: 60px;

	background-color: ${({ theme }) => theme.darkAccent};
`;

export const ControlButtons = styled.button`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 10px;
	place-items: center;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;

	color: ${({ theme }) => theme.light};

	font-size: 30px;
	font-weight: 400;
	font-stretch: 100%;

	:hover {
		background-color: ${({ theme }) => theme.light}11;
		border-radius: 0.5rem;
	}

	:active {
		background-color: ${({ theme }) => theme.light}66;
	}
`;

const size = "25px";

export const Up = styled.div`
	width: ${size};
	height: ${size};
	background: url(${TriangleUp});
	background-size: contain;
	background-repeat: no-repeat;
	justify-self: flex-end;
`;

export const Down = styled.div`
	width: ${size};
	height: ${size};
	background: url(${TriangleDown});
	background-size: contain;
	background-repeat: no-repeat;
	justify-self: flex-end;
`;
