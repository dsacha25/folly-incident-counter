import React, { useState } from "react";
import {
	ButtonLeft,
	ButtonRight,
} from "../common/custom-button/custom-button-alternates.styles";
import IconRight from "../common/icon-right/icon-right.component";
import {
	IncidentData,
	IncidentEditorContainer,
	IncidentName,
} from "./incident-editor.styles";
import { IncidentEditorProps } from "./types";

import { FiHash } from "react-icons/fi";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { CgCalendarToday } from "react-icons/cg";
import Incident from "../../utils/classes/incident/incident";
import { useDispatch } from "react-redux";
import { resetIncidentDate } from "../../redux/incidents/incidents.actions";

const IncidentEditor = (props: IncidentEditorProps) => {
	const dispatch = useDispatch();

	const reset = (incident: Incident) => dispatch(resetIncidentDate(incident));

	const [incident, setIncident] = useState<Incident>(props.incident);

	const handleReset = () => {
		const updatedIncident = incident.resetDateToNow();

		setIncident(updatedIncident);
		reset(updatedIncident);
	};

	return (
		<IncidentEditorContainer>
			<ButtonLeft onClick={handleReset}>Reset</ButtonLeft>
			<IncidentData>
				<IncidentName>{incident.name}</IncidentName>
				<IconRight
					value={incident.days_since}
					icon={<FiHash size="30px" />}
					important
				/>
				<IconRight
					value={incident.comments.length}
					icon={<BiCommentDetail size="30px" />}
				/>
				<IconRight value={incident.likes} icon={<BiLike size="30px" />} />

				<IconRight
					value={incident.getFormattedDate()}
					icon={<CgCalendarToday size="30px" />}
					important
				/>
			</IncidentData>
			<ButtonRight>Edit</ButtonRight>
		</IncidentEditorContainer>
	);
};

export default IncidentEditor;
