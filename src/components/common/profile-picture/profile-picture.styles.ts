import styled from "styled-components";
import PictureAvatar from "../../../assets/placeholders/profile-picture/picture-avatar.png";
import { ProfilePictureProps } from "./types";

export const ProfilePictureContainer = styled.div<ProfilePictureProps>`
	display: grid;
	width: 11.3vw;
	height: 11.3vw;
	min-width: 220px;
	min-height: 220px;
	background: url(${({ photoURL }) => (photoURL ? photoURL : PictureAvatar)});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	border-radius: 20px;
`;
