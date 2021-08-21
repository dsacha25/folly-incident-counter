import styled from "styled-components";
import CustomButton from "../common/custom-button/custom-button.component";
import ProfilePicture from "../common/profile-picture/profile-picture.component";

export const AccessPanelContainer = styled.div`
	display: grid;
	place-items: flex-start;
	width: 100%;
	height: 100%;
	grid-template-rows: repeat(5, auto) 1fr;

	padding: 50px 0 0 100px;

	@media screen and (max-width: 800px) {
		position: absolute;
		bottom: 0;
		right: 0;

		max-width: 100vw;
		height: 20vw;

		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr;
	}
`;

export const PanelPicture = styled(ProfilePicture)`
	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const PanelButton = styled(CustomButton)`
	min-width: 200px;
	margin: 20px 0;

	@media screen and (max-width: 800px) {
		width: 20vw;
		min-width: 20vw;
		height: 20vw;

		margin: 0;
		padding: 0;

		border-radius: 0;
		border-width: 1px;
		border-top: none;
		border-bottom: none;
	}
`;
