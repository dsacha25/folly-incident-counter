import styled from "styled-components";
import CustomInput from "../common/custom-input/custom-input.component";
import CustomButton from "../common/custom-button/custom-button.component";

export const ReportContainer = styled.form`
	display: grid;
	grid-template-columns: 1fr auto 136px;
	width: 100%;
	max-width: 52vw;
	height: 60px;
	place-items: center;
	border-radius: 25px;

	border: 1px solid ${({ theme }) => theme.lightAccent};
`;

export const ReportInput = styled(CustomInput)`
	border: none !important;
	box-shadow: none !important;
	background: none !important;
	height: 100%;
	max-height: 60px;
	font-size: 25px;
	color: ${({ theme }) => theme.lightAccent};

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

export const ReportButton = styled(CustomButton)`
	margin: 0;
	border: none;

	:hover {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		background-color: ${({ theme }) => theme.lightAccent};
	}

	:active {
		transform: unset;
	}
`;
