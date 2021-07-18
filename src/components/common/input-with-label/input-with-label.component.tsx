import React, { FormEventHandler, useState, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ButtonRight } from "../custom-button/custom-button-alternates.styles";
import {
	EditInputContainer,
	InputWrapper,
	Label,
	LabeledInput,
} from "./input-with-label.styles";

interface InputWithLabelProps {
	label: string;
	onChange?: FormEventHandler<HTMLInputElement>;
	value?: string | number;
	type?: string;
	error?: string | null | undefined | FieldError;
	placeholder?: string;
}

const InputWithLabel = forwardRef(
	(props: InputWithLabelProps & React.ComponentPropsWithRef<"input">) => {
		const [disabled, setDisabled] = useState<boolean>(true);

		return (
			<InputWrapper>
				<Label>{props.label}</Label>
				<EditInputContainer>
					<LabeledInput disabled={disabled} {...props} />
					<ButtonRight onClick={() => setDisabled(!disabled)}>Edit</ButtonRight>
				</EditInputContainer>
			</InputWrapper>
		);
	}
);

export default InputWithLabel;
