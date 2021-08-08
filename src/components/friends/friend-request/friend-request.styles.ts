import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

export const FriendRequestContainer = styled.div`
	display: grid;
	place-items: center;

	width: 100%;
	height: 60px;

	gap: 20px;
	grid-template-columns: 1fr 60px 60px;
`;

export const Username = styled.p`
	margin: 0;
	padding: 0;
	font-size: 35px;
	font-style: italic;
	font-weight: 600;
`;

export const RequestButton = styled(CustomButton)`
	width: 60px;
	height: 60px;
	border-radius: 30px;
	padding: 0;
`;
