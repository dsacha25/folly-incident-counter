import styled from "styled-components";
import CustomButton from "../common/custom-button/custom-button.component";
import BorderStyles from "../common/styles/border/border.styles";

export const IncidentEditorContainer = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;
	max-width: 49vw;
	max-height: 60px;

	grid-template-columns: 120px 1fr 96px;

	overflow: hidden;
	${BorderStyles}
`;

export const IncidentData = styled.div`
	display: grid;
	place-items: center;
	width: 97%;
	height: 100%;

	grid-template-columns: 1fr repeat(3, auto) 1fr;

	gap: 20px;

	overflow-x: scroll;
`;

export const IncidentName = styled.p`
	font-size: 30px;
	font-weight: 700;
	padding: 0;
	margin: 0;
	justify-self: flex-start;
	white-space: nowrap;
`;