import React, { ReactNode } from "react";
import {
	ContainerHeader,
	GenericContainerWrapper,
	HeaderText,
} from "./generic-container.styles";

interface GenericContainerProps {
	title: string;
	children?: ReactNode;
}

const GenericContainer = (props: GenericContainerProps) => {
	return (
		<GenericContainerWrapper>
			<ContainerHeader>
				<HeaderText>{props.title}</HeaderText>
				{props.children}
			</ContainerHeader>
		</GenericContainerWrapper>
	);
};

export default GenericContainer;
