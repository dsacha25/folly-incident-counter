import React from "react";
import {
	ContainerHeader,
	GenericContainerWrapper,
	HeaderText,
} from "./generic-container.styles";
import { GenericContainerProps } from "./types";

const GenericContainer = (props: GenericContainerProps) => {
	return (
		<GenericContainerWrapper
			maxWidth={props.maxWidth}
			maxHeight={props.maxHeight}
			minWidth={props.minWidth}
			minHeight={props.minHeight}
		>
			<ContainerHeader>
				<HeaderText>{props.title}</HeaderText>
			</ContainerHeader>
			{props.children}
		</GenericContainerWrapper>
	);
};

export default GenericContainer;
