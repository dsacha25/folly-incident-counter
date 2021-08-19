import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardProps } from "../types";
import { FeedContainer } from "./feed.styles";
import { State } from "../../../redux/root-reducer";
import Incident from "../../../utils/classes/incident/incident";
import Post from "../../posts/post/post.component";
import {
	selectFeedIncidents,
	selectIsFetchingFeed,
} from "../../../redux/feed/feed.selector";
import { fetchFeedIncidentsStart } from "../../../redux/feed/feed.actions";
import Spinner from "../../common/spinner/spinner.component";

const Feed = (props: DashboardProps) => {
	const dispatch = useDispatch();

	const fetchFeed = () => dispatch(fetchFeedIncidentsStart());

	const feedIncidents = useSelector<State, Incident[]>((state) =>
		selectFeedIncidents(state)
	);
	const isFetching = useSelector<State, boolean>((state) =>
		selectIsFetchingFeed(state)
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
				<Fragment>
					{isFetching ? (
						<Spinner />
					) : (
						<div>
							<h2>Oops! You have no icidents!</h2>
							<p>Create your one or add friends and see theirs</p>
						</div>
					)}
				</Fragment>
			)}
		</FeedContainer>
	) : null;
};

export default Feed;
