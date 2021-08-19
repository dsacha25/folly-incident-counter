import styled from "styled-components";
import CustomButton from "../../common/custom-button/custom-button.component";

export const SignIn = styled(CustomButton)`
	grid-column: 4 / span 4;
	height: 40px;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;
