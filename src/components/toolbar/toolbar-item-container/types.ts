import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface SearchData {
	query: string;
}

interface ReportData {
	name: string;
	incident_date: Date;
}

export type FormData = SearchData | ReportData;

export interface ToolbarContainerProps {
	open: boolean;
	maxWidth?: string;
	icon: ReactNode;
	children?: ReactNode;
	onClick: () => void;
	onSubmit?: () => void | SubmitHandler<FormData> | Promise<void>;
}
