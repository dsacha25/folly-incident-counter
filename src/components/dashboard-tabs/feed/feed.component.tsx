import React from "react";
import { useSelector } from "react-redux";
import { DashboardProps } from "../types";
import { FeedContainer } from "./feed.styles";
import { State } from "../../../redux/root-reducer";
import Incident from "../../../utils/classes/incident/incident";
import { selectIncidents } from "../../../redux/incidents/incidents.selector";
import Post from "../../posts/post/post.component";

const Feed = (props: DashboardProps) => {
	const incidents = useSelector<State, Array<Incident>>((state) =>
		selectIncidents(state)
	);

	return props.tab === 0 ? (
		<FeedContainer>
			{incidents.map((incident, i) => (
				<Post key={i} incident={incident} />
			))}
			{incidents.length > 0 && (
				<div>
					<h4>Oops! You have no icidents!</h4>
					<p>Create your first one</p>
				</div>
			)}
		</FeedContainer>
	) : null;
};

export default Feed;
