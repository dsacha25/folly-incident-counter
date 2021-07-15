import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../common/custom-button/custom-button.component";
import { ReportButton, ReportContainer, ReportInput } from "./report.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { createIncidentStart } from "../../redux/incidents/incidents.actions";
import Incident from "../../utils/classes/incident/incident";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { State } from "../../redux/root-reducer";
import { User } from "../../redux/user/types";

interface IncidentReport {
	name: string;
	incident_date: Date;
}

const Report = () => {
	const dispatch = useDispatch();

	const createIncident = (incident: Incident) =>
		dispatch(createIncidentStart(incident));

	const user = useSelector<State, User>((state) => selectCurrentUser(state));

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IncidentReport>();

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
					},
				})
			);
		}
	};

	return (
		<ReportContainer onSubmit={handleSubmit(onSubmit)}>
			<ReportInput
				{...register("name", { required: true })}
				error={errors.name}
				placeholder="What happened?"
			/>
			<ReportInput
				type="date"
				{...register("incident_date", { required: true })}
			/>
			<ReportButton>Report</ReportButton>
		</ReportContainer>
	);
};

export default Report;
