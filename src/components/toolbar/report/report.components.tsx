import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReportContainer, ReportInput } from "./report.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { createIncidentStart } from "../../../redux/incidents/incidents.actions";
import Incident from "../../../utils/classes/incident/incident";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { State } from "../../../redux/root-reducer";
import { User } from "../../../redux/user/types";
import ToolbarItemContainer from "../toolbar-item-container/toolbar-item-container.component";
import { GoReport } from "react-icons/go";
import { useToolbarContext } from "../toolbar-main/toolbar-main.component";
import "react-datepicker/dist/react-datepicker.css";

import { ButtonRight } from "../../common/custom-button/custom-button-alternates.styles";
import CustomDateInput from "../../common/custom-date-input/custom-date-input.component";
import { addDays } from "date-fns";

interface IncidentReport {
	name: string;
	incident_date: Date;
}

const Report = () => {
	const dispatch = useDispatch();

	const { index, setIndex } = useToolbarContext();

	const createIncident = (incident: Incident) =>
		dispatch(createIncidentStart(incident));

	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<IncidentReport>();

	const selected = watch("incident_date");

	const onSubmit: SubmitHandler<IncidentReport> = (data) => {
		// REPORT INCIDENT TO FIREBASE

		console.log("DATE: ", data.incident_date);

		if (user) {
			createIncident(
				new Incident({
					name: data.name,
					incident_date: new Date(data.incident_date),
					user: {
						username: user.displayName,
						photoURL: user.photoURL,
						user_uid: user.uid,
					},
				})
			);
		}
	};

	const handleClickAway = () => {
		console.log("CLICK AWAY");

		setIndex(null);
	};

	const handleDate = (date: Date) => {
		setValue("incident_date", date);
	};

	return (
		<ToolbarItemContainer
			onSubmit={handleSubmit(onSubmit)}
			onClick={() => setIndex(1)}
			icon={<GoReport size="40px">{index}</GoReport>}
			open={index === 1}
		>
			<ReportContainer>
				<ReportInput
					{...register("name", { required: true })}
					error={errors.name}
					placeholder="What happened?"
				/>
				<CustomDateInput
					selected={selected}
					onChange={handleDate}
					dateFormat="yyyy-MM-dd"
					maxDate={new Date()}
				/>
				<ButtonRight>Report</ButtonRight>
			</ReportContainer>
		</ToolbarItemContainer>
	);
};

export default memo(Report);
