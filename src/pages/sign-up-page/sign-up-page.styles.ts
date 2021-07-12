import styled from "styled-components";
import CustomInput from "../../components/common/custom-input/custom-input.component";

export const SignUpForm = styled.form`
	display: grid;
	height: 44vh;
	width: 30vw;
	place-items: center;

	grid-template-rows: auto repeat(5, 1fr) auto;
`;

export const SignUpInput = styled(CustomInput)`
	height: 35px;
`;
