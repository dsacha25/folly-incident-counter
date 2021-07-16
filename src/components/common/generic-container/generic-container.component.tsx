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
			maxHeight={props.maxHeight}
			maxWidth={props.maxWidth}
		>
			<ContainerHeader>
				<HeaderText>{props.title}</HeaderText>
			</ContainerHeader>
			{props.children}
		</GenericContainerWrapper>
	);
};

export default GenericContainer;
