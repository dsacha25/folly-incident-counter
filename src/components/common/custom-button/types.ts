import { ReactNode, FormEvent } from "react";

export interface StyleTypes {
	size?: string | number;
	width?: string | number;
	height?: string | number;
	fontSize?: string;
	fontWeight?: string | number;
	letterSpacing?: string;
	color?: string;
	backgroundColor?: string;
	padding?: string;
	margin?: string;
	maxWidth?: string;
	maxHeight?: string;
	minWidth?: string;
	minHeight?: string;
	active?: boolean;
}

type Click =
	| (() => void)
	| ((e: FormEvent<HTMLButtonElement>) => void)
	| Promise<void>;

export interface CustomButtonProps extends StyleTypes {
	onClick?: Click;
	disabled?: boolean;
	children?: ReactNode;
}

export default CustomButtonProps;
