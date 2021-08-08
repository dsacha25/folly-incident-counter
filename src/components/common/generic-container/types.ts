import { ReactNode } from "react";

export interface GenericContainerProps {
	maxHeight?: string;
	maxWidth?: string;
	minWidth?: string;
	minHeight?: string;
	title: string;
	children?: ReactNode;
}

export type GenericContainerStyleProps = Omit<
	GenericContainerProps,
	"title" | "children"
>;
