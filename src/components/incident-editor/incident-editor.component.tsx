import React, { useEffect, useState, memo } from "react";
import {
	ButtonLeft,
	ButtonRight,
} from "../common/custom-button/custom-button-alternates.styles";
import IconRight from "../common/icon-right/icon-right.component";
import {
	IncidentData,
	IncidentEditorContainer,
	IncidentNameInput,
} from "./incident-editor.styles";
import { IncidentEditorProps } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiHash } from "react-icons/fi";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import Incident from "../../utils/classes/incident/incident";
import { useDispatch } from "react-redux";
import {
	deleteIncidentStart,
	updateIncidentInfoStart,
} from "../../redux/incidents/incidents.actions";
import CustomDateInput from "../common/custom-date-input/custom-date-input.component";

interface IncidentReport {
	name: string;
	incident_date: Date;
}

const IncidentEditor = (props: IncidentEditorProps) => {
	const dispatch = useDispatch();

	const update = (incident: Incident) =>
		dispatch(updateIncidentInfoStart(incident));
	const deleteIncident = (inc_uid: string) =>
		dispatch(deleteIncidentStart(inc_uid));

	const [incident, setIncident] = useState<Incident>(props.incident);
	const [disabled, setDisabled] = useState<boolean>(true);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<IncidentReport>();

	// useEffect(() => {
	// 	console.log("NAME: ", watch("name"));
	// });

	const handleReset = () => {
		if (disabled) {
			/// RESET INCIDENT
			const updatedIncident = incident.resetDateToNow();
			setIncident(updatedIncident);
			update(updatedIncident);
		} else {
			/// DELETE INCIDENT
			deleteIncident(incident.inc_uid);
		}
	};

	const handleDate = (date: Date) => {
		console.log("DATE: ", date);

		setValue("incident_date", date);
	};

	const onSubmit: SubmitHandler<IncidentReport> = (data) => {
		setDisabled(true);
		console.log("SUBMIT: ", data);

		if (data.name === undefined) {
			update(
				incident.updateNameAndDate({
					name: incident.name,
					incident_date: data.incident_date,
				})
			);
			reset();
		} else {
			update(incident.updateNameAndDate(data));
			reset();
		}
	};

	const handleEdit = () => {
		setDisabled(!disabled);
		console.log(disabled);

		if (disabled) {
			setValue("incident_date", incident.incident_date);
		}

		if (!disabled) {
			handleSubmit(onSubmit);
		}
	};

	return (
		<IncidentEditorContainer onSubmit={handleSubmit(onSubmit)}>
			<ButtonLeft type="button" onClick={handleReset}>
				{disabled ? "Reset" : "Delete"}
			</ButtonLeft>
			<IncidentData>
				<IncidentNameInput
					{...register("name")}
					error={errors.name}
					placeholder={watch("name", incident.name)}
					disabled={disabled}
				/>
				<IconRight
					value={incident.days_since}
					icon={<FiHash size="20px" />}
					important
				/>
				<IconRight
					value={incident.comments.length}
					icon={<BiCommentDetail size="20px" />}
				/>
				<IconRight value={incident.likes} icon={<BiLike size="20px" />} />

				<CustomDateInput
					selected={watch("incident_date", incident.incident_date)}
					dateFormat="yyyy-MM-dd"
					onChange={handleDate}
					maxDate={new Date()}
					disabled={disabled}
				/>
			</IncidentData>

			<ButtonRight type="button" onClick={handleEdit} hidden={!disabled}>
				Edit
			</ButtonRight>

			<ButtonRight type="submit" onClick={handleEdit} hidden={disabled}>
				Save
			</ButtonRight>
		</IncidentEditorContainer>
	);
};

export default memo(IncidentEditor);
