import styled from "styled-components";

export const ToolbarMainContainer = styled.div`
	display: grid;
	width: auto;
	height: 60px;
	place-items: center;

	grid-template-columns: repeat(3, auto);
	gap: 40px;

	place-self: center;

	@media screen and (max-width: 800px) {
		gap: 0;
	}
`;
