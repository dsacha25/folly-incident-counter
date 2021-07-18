import styled from "styled-components";
import Incident from "../../../utils/classes/incident/incident";

interface InterfaceContainerProps {
	incidents: Array<Incident>;
}

export const IncidentsContainer = styled.div<InterfaceContainerProps>`
	display: grid;
	place-items: flex-start center;
	width: 100%;
	height: 100%;
	max-height: 85vh;

	overflow-y: scroll;

	grid-template-rows: repeat(
		${({ incidents }) => (incidents ? incidents.length : 1)},
		64px
	);

	gap: 40px;
`;
