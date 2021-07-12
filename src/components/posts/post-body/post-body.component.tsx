import React from "react";
import {
	Title,
	DashDivider,
	DaysSince,
	IncidentName,
	PostBodyContainer,
	TitleContainer,
	DaysContainer,
	Arrow,
} from "./post-body.styles";
import PostBodyProps from "./types";

const PostBody = (props: PostBodyProps) => {
	return (
		<PostBodyContainer>
			<TitleContainer>
				<Title>Days Since</Title>
				<DashDivider />
				<IncidentName>{props.name}</IncidentName>
			</TitleContainer>
			<DaysContainer>
				<Arrow wasReset={props.wasReset} />
				<DaysSince>{props.daysSince}</DaysSince>
			</DaysContainer>
		</PostBodyContainer>
	);
};

export default PostBody;
