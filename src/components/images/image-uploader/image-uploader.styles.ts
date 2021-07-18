import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

export const ImageUploadContainer = styled.div`
	display: grid;
	place-items: center;

	width: 220px;
	height: 220px;
	margin: 20px 0;
	padding: 0;
	position: relative;
	transition: all 1s ease;
	border: 4px solid #8a8b9d;
	background-color: #8a8b9de2;
	border-radius: 30px;
	overflow: hidden;
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

interface HoverControlsProps {
	hover: boolean;
}

export const HoverUploadControls = styled.div<HoverControlsProps>`
	display: ${({ hover }) => (hover ? "grid" : "none")};
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
	place-items: center;

	background-color: #8a8b9de2;
	padding: 30px 0;
`;

interface PhotoButtonProps {
	error?: string | null;
}

export const PhotoButton = styled(CustomButton)<PhotoButtonProps>`
	width: 80%;
	height: 40px;
	color: white;
	border-color: white;
	border-width: 4px;
	margin: 0;
	z-index: 3;

	display: ${({ error }) => error && "none"};
`;

export const HiddenInput = styled.input`
	width: 100%;
`;

export const UploadErrorMessage = styled.p`
	display: grid;
	place-items: center;

	padding: 0;
	margin: 0;

	position: absolute;
	z-index: 10;

	width: 100%;
	height: 100%;

	text-align: center;
	background-color: #cacbdde2;
	font-size: 1.25rem;
	font-weight: 400;
	color: red;
`;

interface CropperContainerProps {
	hide: boolean;
}

export const CropperContainer = styled.div<CropperContainerProps>`
	position: relative;
	width: 100%;
	height: 200px;
	z-index: ${({ hide }) => hide && "-100"};
`;
