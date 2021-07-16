import { ReactNode } from "react";

export interface GenericContainerProps {
	maxHeight?: string;
	maxWidth?: string;
	title: string;
	children?: ReactNode;
}

export interface GenericContainerStyleProps {
	maxHeight?: string;
	maxWidth?: string;
}
