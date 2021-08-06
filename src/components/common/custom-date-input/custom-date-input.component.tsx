import React from "react";

import { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../custom-input/custom-input.component";
import { CustomDatePicker } from "./custom-date-input.styles";

const CustomDateInput = (props: ReactDatePickerProps) => {
	return (
		<CustomDatePicker {...props} customInput={<CustomInput type="date" />} />
	);
};

export default CustomDateInput;
