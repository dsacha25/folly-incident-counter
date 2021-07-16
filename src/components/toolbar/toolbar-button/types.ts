import { ReactNode } from "react";

export interface ToolbarButtonProps {
	size?: string;
	icon: ReactNode;
	onClick: () => void;
}
