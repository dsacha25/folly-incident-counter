import React, { memo } from "react";
import ToolbarButton from "../toolbar-button/toolbar-button.component";
import { useToolbarContext } from "../toolbar-main/toolbar-main.component";
import { ToolbarItemWrapper } from "./toolbar-item-container.styles";
import { ToolbarContainerProps } from "./types";

const ToolbarItemContainer = (props: ToolbarContainerProps) => {
	return (
		<ToolbarItemWrapper {...props}>
			{props.open ? (
				<>{props.children}</>
			) : (
				<ToolbarButton icon={props.icon} onClick={props.onClick} />
			)}
		</ToolbarItemWrapper>
	);
};

export default memo(ToolbarItemContainer);
