import styled from "styled-components";
import { Theme } from "../../../theme";
import PictureAvatar from "../../../assets/placeholders/profile-picture/picture-avatar.png";

export const PostContainer = styled.div`
	display: grid;
	width: 39vw;
	height: 50vh;

	margin: 30px;

	grid-template-rows: auto 1fr auto;
	place-items: center;

	border: 1px solid ${({ theme }: Theme) => theme.lightAccent};
	border-radius: 30px;
	overflow: hidden;

	@media screen and (max-width: 800px) {
		width: 86vw;
		margin: 0;
	}
`;

export const PostHeader = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr;
	gap: 15px;

	width: 98%;
	height: 100%;

	border-bottom: 1px solid ${({ theme }) => theme.lightAccent};
`;

export const HeaderUserName = styled.p`
	font-size: 20px;
	font-weight: 500;
	font-stretch: 110%;
	font-style: italic;
	place-self: flex-start;
	margin: 10px 0 0 0;
`;

interface HeaderProps {
	photoURL?: string | null | undefined;
}

export const HeaderUserPhoto = styled.div<HeaderProps>`
	background: url(${({ photoURL }) => (photoURL ? photoURL : PictureAvatar)});
	width: 45px;
	height: 45px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 6px 0 0 0;
	border-radius: 2rem;

	overflow: hidden;
`;

export const PostFooter = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	width: 100%;
	height: 100%;
	min-height: 60px;

	background-color: ${({ theme }: Theme) => theme.darkAccent};
`;
