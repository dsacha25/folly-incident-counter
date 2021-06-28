import React, { Children } from "react";
import PropTypes from "prop-types";
import { CustomButtonMain } from "./custom-button.styles";
import CustomButtonProps from "./types";

const CustomButton = (
	props: CustomButtonProps & React.ComponentPropsWithoutRef<"button">
) => {
	return <CustomButtonMain {...props}>{props.children}</CustomButtonMain>;
};

export default CustomButton;
