import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

interface PhotoButtonProps {
	error?: string | null;
}

export const PhotoButton = styled(CustomButton)<PhotoButtonProps>`
	width: 80%;
	height: 40px;
	color: white;
	border-color: white;
	border-width: 1px;
	margin: 0;
	z-index: 3;

	display: ${({ error }) => error && "none"};
`;

interface PhotoDisplayProps {
	url: string;
}

export const PhotoDisplay = styled.div<PhotoDisplayProps>`
	display: grid;
	width: 100%;
	height: 100%;

	z-index: 1;

	background-image: ${({ url }) => `url(${url})`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
