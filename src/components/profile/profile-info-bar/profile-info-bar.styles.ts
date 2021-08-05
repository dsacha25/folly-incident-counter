import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

export const ProfileInfoContainer = styled.div`
	display: grid;
	width: 100vw;
	height: 25.5vh;
	max-height: 260px;
	grid-template-columns: 30vw auto 1fr 30vw;
	place-items: center;

	background-color: ${({ theme }) => theme.darkAccent};
`;

export const ProfileControls = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	place-items: center;
`;

export const ProfileInfo = styled.div`
	display: grid;
	place-items: flex-start;
	grid-template-rows: repeat(3, 1fr);
	height: 86%;
	margin-left: 50px;
`;

export const InfoText = styled.p`
	margin: 0;
	padding: 0;
	font-size: 35px;
	font-style: italic;
	font-weight: 600;
`;

export const ProfileButton = styled(CustomButton)`
	width: 100%;
`;
