import React, { forwardRef } from "react";

import {
	FormInputComponent,
	FormInputLabel,
	GroupContainer,
} from "./custom-input.styles";
import CustomInputTypes from "./types";

const CustomInput = forwardRef(
	(props: CustomInputTypes & React.ComponentPropsWithRef<"input">) => (
		<GroupContainer {...props}>
			<FormInputComponent {...props} />

			{props.label ? (
				<FormInputLabel className={!!props.value ? "shrink" : ""}>
					{props.label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	)
);

export default CustomInput;
