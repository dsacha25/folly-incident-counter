import styled from "styled-components";

export const DashboardMain = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	grid-template-columns: 30% 1fr;
	grid-template-rows: 1fr;
	place-items: center;

	background: linear-gradient(
		180deg,
		rgba(13, 13, 13, 0.5) 0%,
		rgba(32, 46, 65, 0.5) 100%
	);
`;

export const AccessPanel = styled.div`
	display: grid;
	place-items: center flex-start;
	width: 100%;
	height: 100%;
	/* background-color: lightblue; */
	padding: 20px;
`;

export const MainFeed = styled.div`
	display: grid;
	place-items: flex-start center;
	width: 100%;
	height: 100%;
	max-height: 100vh;
	overflow: auto;
`;
