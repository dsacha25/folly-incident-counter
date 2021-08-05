import styled from "styled-components";

export const ProfilePageContainer = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;

	grid-template-rows: 25.5vh 74.5vh;
	padding-top: 15.6vh;
`;

export const ProfileIncidentsContainer = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;
	max-height: 74.5vh;

	overflow-y: auto;
`;
