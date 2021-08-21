import styled from "styled-components";

export const DashboardMain = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	grid-template-columns: 30% 1fr;
	grid-template-rows: 1fr;
	place-items: center;

	overflow: hidden;

	@media screen and (max-width: 800px) {
		place-self: flex-start;
		grid-template-columns: 1fr;

		max-height: calc(100vh - 20vw - 80px);
	}
`;

export const MainContainer = styled.div`
	display: grid;
	place-items: flex-start center;
	grid-template-rows: auto 1fr;
	width: 100%;
	height: 100%;
	max-height: 100vh;
	overflow: hidden;

	gap: 5px;

	@media screen and (max-width: 800px) {
		/* Apply the mask image and mask size variables */
		mask-image: linear-gradient(
			to bottom,
			black 80px,
			black calc(100% - 80px),
			transparent
		);
		mask-size: 100%;
		mask-position: 0 0, 100% 0;
		mask-repeat: no-repeat, no-repeat;
	}
`;
