import React, { memo } from "react";
import { ToolbarIconButton } from "./toolbar-button.styles";
import { ToolbarButtonProps } from "./types";

const ToolbarButton = (props: ToolbarButtonProps) => {
	return (
		<ToolbarIconButton onClick={props.onClick} type="button">
			{props.icon}
		</ToolbarIconButton>
	);
};

export default memo(ToolbarButton);
