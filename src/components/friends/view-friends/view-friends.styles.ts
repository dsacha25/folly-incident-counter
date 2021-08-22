import styled from "styled-components";
import PictureAvatar from "../../../assets/placeholders/profile-picture/picture-avatar.png";
import { Profile } from "../../../redux/profile/types";

interface ViewFriendsProps {
	minWidth?: string;
}

export const FriendsContainer = styled.div<ViewFriendsProps>`
	display: grid;
	place-items: center;
	grid-template-rows: 80px 1fr 80px;

	height: 85%;
	min-width: ${({ minWidth }) => (minWidth ? minWidth : "400px")};
	max-width: 40vw;
	max-height: 40vh;

	border: 1px solid ${({ theme }) => theme.lightAccent};
	border-radius: 30px;
`;

export const FriendsInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;

	place-items: center;
	width: 94%;

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
	place-items: flex-start center;
	grid-template-columns: repeat(3, 1fr);
	width: 90%;
`;

export const FriendPhoto = styled.div<Pick<Profile, "photoURL">>`
	background: url(${({ photoURL }) => (photoURL ? photoURL : PictureAvatar)});
	width: 70px;
	height: 70px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0;
	border-radius: 50%;

	overflow: hidden;

	cursor: pointer;

	:active {
		transform: scale(0.98);
	}
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
