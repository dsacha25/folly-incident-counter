import React from "react";
import { DashboardProps } from "../dashboard.types";
import { FeedContainer } from "./feed.styles";

const Feed = (props: DashboardProps) => {
	return props.tab === 2 ? (
		<FeedContainer>Feed of Incidents from Friends and Shit</FeedContainer>
	) : null;
};

export default Feed;
