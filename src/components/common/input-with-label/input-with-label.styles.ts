import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

export const InputWrapper = styled.div`
	display: grid;
	width: 100%;
	height: 60px;

	place-items: center;

	grid-template-columns: auto 1fr;
`;

export const Label = styled.p`
	font-size: 20px;
	font-weight: 300;
	font-style: italic;
	font-stretch: 100%;

	justify-self: flex-start;

	padding: 0 0 0 20px;
	margin: 0;

	color: ${({ theme }) => theme.lightAccent};
`;

export const EditInputContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	place-items: center;

	max-width: 25vw;
	min-width: 480px;

	grid-template-columns: 1fr 96px;

	border: 1px solid ${({ theme }) => theme.lightAccent};

	border-radius: 15px;

	overflow: hidden;
`;

export const EditButton = styled(CustomButton)`
	height: 100%;
	margin: 0;
	border: none;
	background-color: ${({ theme }) => theme.lightAccent};
	border-radius: 0;

	:hover {
		background-color: ${({ theme }) => theme.lightAccent}55;
	}

	:active {
		transform: unset;
	}
`;

export const LabeledInput = styled(CustomInput)`
	font-weight: 100;
	font-stretch: condensed;
	color: ${({ theme }) => theme.lightAccent};

	border: none !important;
	box-shadow: none !important;
	background: none !important;
	height: 100%;
	max-height: 60px;
	font-size: 25px;

	padding: 0 0 0 20px;

	::placeholder {
		color: ${({ theme }) => theme.lightAccent};
		font-weight: 100;
	}

	input[type="date"]::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}

	input[type="date"] {
		font-weight: 800;
	}

	:active {
		background: none;
	}
`;