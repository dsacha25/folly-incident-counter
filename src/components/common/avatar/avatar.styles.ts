import styled from "styled-components";
import PictureAvatar from "../../../assets/placeholders/profile-picture/picture-avatar.png";
import { AvatarProps } from "./types";

export const AvatarContainer = styled.div<Pick<AvatarProps, "noBorder">>`
	display: grid;
	place-items: center;
	grid-template-columns: 45px 1fr;
	gap: 15px;

	width: 96%;
	height: 100%;
	min-height: 60px;

	border-bottom: ${({ noBorder }) => (noBorder ? "0px" : "1px")} solid
		${({ theme }) => theme.lightAccent};
`;

export const AvatarPhoto = styled.div<Pick<AvatarProps, "photoURL">>`
	background: url(${({ photoURL }) => (photoURL ? photoURL : PictureAvatar)});
	width: 45px;
	height: 45px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0 0 0;
	border-radius: 50%;

	overflow: hidden;

	cursor: pointer;
`;

export const AvatarDisplayName = styled.p`
	font-size: 20px;
	font-weight: 500;
	font-stretch: 110%;
	font-style: italic;
	place-self: center flex-start;
	margin: 0;
`;
