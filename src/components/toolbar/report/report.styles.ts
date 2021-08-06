import styled from "styled-components";
import CustomInput from "../../common/custom-input/custom-input.component";

export const ReportContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 136px;
	width: 100%;
	max-width: 52vw;
	height: 60px;
	place-items: center;
	position: relative;

	grid-template-rows: 1fr 0;

	.react-datepicker__tab-loop {
		grid-row: 2 / 2;
	}
`;

export const ReportInput = styled(CustomInput)`
	border: none !important;
	box-shadow: none !important;
	background: none !important;
	height: 100%;
	max-height: 60px;
	font-size: 25px;
	color: ${({ theme }) => theme.lightAccent} !important;

	padding: 0 0 0 20px;

	::placeholder {
		color: ${({ theme }) => theme.lightAccent};
		font-weight: 100;
	}

	input[type="date"] {
		font-weight: 800;
	}

	:active {
		background: none;
	}
`;
