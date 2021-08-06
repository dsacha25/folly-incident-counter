import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardProps } from "../types";
import { FeedContainer } from "./feed.styles";
import { State } from "../../../redux/root-reducer";
import Incident from "../../../utils/classes/incident/incident";
import Post from "../../posts/post/post.component";
import { selectFeedIncidents } from "../../../redux/feed/feed.selector";
import { fetchFeedIncidentsStart } from "../../../redux/feed/feed.actions";

const Feed = (props: DashboardProps) => {
	const dispatch = useDispatch();

	const fetchFeed = () => dispatch(fetchFeedIncidentsStart());

	const feedIncidents = useSelector<State, Incident[]>((state) =>
		selectFeedIncidents(state)
	);

	useEffect(() => {
		if (props.tab === 0) {
			fetchFeed();
		}
	}, [props.tab]);

	return props.tab === 0 ? (
		<FeedContainer>
			{feedIncidents.map((incident, i) => (
				<Post key={i} incident={incident} />
			))}
			{feedIncidents.length == 0 && (
				<div>
					<h2>Oops! You have no icidents!</h2>
					<p>Create your one or add friends and see theirs</p>
				</div>
			)}
		</FeedContainer>
	) : null;
};

export default Feed;
