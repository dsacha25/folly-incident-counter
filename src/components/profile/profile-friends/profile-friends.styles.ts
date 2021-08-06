import styled from "styled-components";
import PictureAvatar from "../../../assets/placeholders/profile-picture/picture-avatar.png";
import { Friend } from "./types";

export const FriendsContainer = styled.div`
	display: grid;

	width: 100%;
	height: 85%;
	max-width: 30vw;
	max-height: 220px;
	padding: 30px;
	border: 1px solid ${({ theme }) => theme.lightAccent};
	border-radius: 30px;

	place-items: center;
	grid-template-rows: 25% 1fr 28%;
`;

export const FriendsInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	/* padding: 20px; */
	place-items: center;
	width: 90%;

	color: ${({ theme }) => theme.lightAccent};

	border-bottom: 1px solid ${({ theme }) => theme.lightAccent};
`;

export const FriendsLabel = styled.h4`
	font-style: italic;
	font-size: 40px;
	font-weight: 100;
	justify-self: flex-start;
	margin: 0;
`;

export const FriendsCount = styled.h4`
	font-style: italic;
	font-size: 25px;
	font-weight: 600;
	justify-self: flex-start;
	margin: 0;
`;

export const FriendsList = styled.div`
	display: grid;
	place-items: center;
	grid-template-columns: repeat(3, 1fr);
`;

export const FriendPhoto = styled.div<Omit<Friend, "username">>`
	background: url(${({ photoURL }) => (photoURL ? photoURL : PictureAvatar)});
	width: 70px;
	height: 70x;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0 0 0;
	border-radius: 50%;

	overflow: hidden;
`;

export const ViewMoreLink = styled.a`
	font-style: italic;
	font-weight: 100;
	font-size: 30px;

	text-decoration: none;

	:hover {
		text-decoration: underline;
	}

	color: ${({ theme }) => theme.lightAccent};
`;
