import styled from "styled-components";

import DatePicker from "react-datepicker";

export const CustomDatePicker = styled(DatePicker)`
	border: none !important;
	box-shadow: none !important;
	background: none !important;
	height: 100%;
	max-height: 60px;
	font-size: 25px;
	color: ${({ theme }) => theme.lightAccent};

	padding: 0;
	position: relative;

	input[type="date"]::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}

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
