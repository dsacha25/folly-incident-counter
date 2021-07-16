import React from "react";
import { Data, IconRightContainer } from "./icon-right.styles";
import { IconRightProps } from "./types";

const IconRight = (props: IconRightProps) => {
	return (
		<IconRightContainer>
			<Data important={props.important}>{props.value}</Data>
			{props.icon}
		</IconRightContainer>
	);
};

export default IconRight;
