import { ReactNode } from "react";

export interface IconRightProps {
	icon: ReactNode;
	value: string | number | null | undefined;
	important?: boolean;
}
