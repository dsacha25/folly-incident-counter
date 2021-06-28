import { FormEventHandler } from "react";
import { StyleTypes } from "../custom-button/types";
import { FieldError } from "react-hook-form";

interface CustomInputTypes extends StyleTypes {
	label?: string;
	onChange?: FormEventHandler<HTMLInputElement>;
	value?: string | number;
	type?: string;
	error?: string | null | undefined | FieldError;
}

export default CustomInputTypes;
