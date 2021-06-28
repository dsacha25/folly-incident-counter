import styled from "styled-components";

export const ProfilePage = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	place-items: center;
	grid-template-columns: 25% 1fr;
	background: linear-gradient(
		180deg,
		rgba(13, 13, 13, 0.5) 0%,
		rgba(32, 46, 65, 0.5) 100%
	);
`;

export const ControlPanel = styled.div`
	display: grid;
	place-items: center flex-start;
	width: 100%;
	height: 100%;
	background-color: lightblue;
`;

export const UserFeed = styled.div`
	display: grid;
	place-items: flex-start center;
	width: inherit;
	height: inherit;
`;
