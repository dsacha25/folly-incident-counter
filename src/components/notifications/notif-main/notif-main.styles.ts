import styled from "styled-components";

export const NotifcationContainer = styled.div`
	display: grid;
	place-items: flex-start center;
	padding: 10px 0;

	width: 300px;
	height: 400px;

	background-color: ${({ theme }) => theme.darkAccent};
	border: 1px solid ${({ theme }) => theme.lightAccent};
	border-radius: 20px;

	position: absolute;

	top: 125%;
	right: 0;
`;
