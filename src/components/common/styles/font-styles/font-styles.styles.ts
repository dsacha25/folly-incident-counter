import { css } from "styled-components";
import { FontStyleProps } from "./types";

export const FontStyles = css<FontStyleProps>`
	font: ${({
		fontStyle,
		fontWeight,
		fontStretch,
		fontSize,
		lineHeight,
		fontFamily,
	}) =>
		`${fontStyle} normal ${fontWeight} ${fontStretch} ${
			fontSize ? fontSize : "26px"
		} ${lineHeight} ${fontFamily}`};
	text-transform: ${({ textTransform }) => textTransform};
`;
