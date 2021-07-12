import styled from "styled-components";
import PictureAvatar from "../../assets/placeholders/profile-picture/picture-avatar.png";

export const AcceessPanelContainer = styled.div`
	display: grid;
	place-items: flex-start;
	width: 100%;
	height: 100%;
	grid-template-rows: repeat(5, auto) 1fr;

	padding: 50px 0 0 100px;
`;

interface ProfilePicture {
	photoURL: string | null | undefined;
}

export const ProfilePicture = styled.div<ProfilePicture>`
	display: grid;
	width: 11.3vw;
	height: 11.3vw;
	background: url(${({ photoURL }) => (photoURL ? photoURL : PictureAvatar)});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	border-radius: 20px;
`;
