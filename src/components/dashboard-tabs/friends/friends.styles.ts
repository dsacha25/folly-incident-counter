import styled from "styled-components";

interface FriendsContainerProps {
	friends: string[];
}

export const FriendsTabContainer = styled.div`
	display: grid;
	width: 60vw;
	min-width: 600px;
	height: 100%;

	place-items: center;
	grid-template-rows: minmax(200px, 30%) 1fr;
`;

export const FriendsContainer = styled.div<FriendsContainerProps>`
	display: grid;
	place-items: flex-start center;
	width: 100%;
	height: 100%;
	max-height: 85vh;

	overflow-y: scroll;

	grid-template-rows: repeat(
		${({ friends }) => (friends ? friends.length : 1)},
		64px
	);

	gap: 40px;

	padding-top: 100px;
`;
