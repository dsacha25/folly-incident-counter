import styled from "styled-components";

interface CropperProps {
	hide?: boolean;
}

export const CropperContainer = styled.div<CropperProps>`
	position: relative;
	width: 100%;
	height: 200px;
	z-index: ${({ hide }) => hide && "-100"};
`;
