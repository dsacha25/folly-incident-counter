import styled from "styled-components";

export const ProfileContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	place-items: flex-start center;
	max-width: 40vw;

	padding-top: 40px;
	grid-template-rows: auto 1fr;
	gap: 40px;

	@media screen and (max-width: 800px) {
		max-width: 90vw;
		grid-template-rows: 1fr 1fr;
	}
`;

export const InfoContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;

	place-items: stretch;

	grid-template-rows: auto auto 1fr;

	gap: 20px;

	@media screen and (max-width: 800px) {
		place-items: flex-start center;
	}
`;

export const StatsContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;

	place-items: stretch;

	grid-template-rows: repeat(4, 1fr);

	gap: 10px;
`;

export const DataWrapper = styled.div`
	display: grid;
	width: 97%;
	height: 50px;

	place-items: center;

	grid-template-columns: 1fr auto;
`;
