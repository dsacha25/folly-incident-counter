import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../../components/posts/post/post.component";

import ProfileInfoBar from "../../components/profile/profile-info-bar/profile-info-bar.component";
import {
	fetchProfileInfoStart,
	fetchProfileIncidentsStart,
	fetchFriendsStart,
} from "../../redux/profile/profile.action";
import {
	selectProfileIncidents,
	selectProfileUser,
} from "../../redux/profile/profile.selector";
import { Profile } from "../../redux/profile/types";
import { State } from "../../redux/root-reducer";
import Incident from "../../utils/classes/incident/incident";
import { PageBlank } from "../page-styles/page-styles.styles";
import {
	ProfileIncidentsContainer,
	ProfilePageContainer,
} from "./public-profile-page.style";

import ParamTypes from "../../types";

const PublicProfilePage = () => {
	const dispatch = useDispatch();

	const fetchInfo = (uid: string) => dispatch(fetchProfileInfoStart(uid));
	const fetchIncidents = (uid: string) =>
		dispatch(fetchProfileIncidentsStart(uid));

	const fetchFriends = (uid: string) => dispatch(fetchFriendsStart(uid));

	const user_info = useSelector<State, Profile | null>((state) =>
		selectProfileUser(state)
	);
	const incidents = useSelector<State, Incident[]>((state) =>
		selectProfileIncidents(state)
	);

	const [profile_info, setProfileInfo] = useState<Profile>({
		displayName: "",
		email: "",
		photoURL: "",
	});

	const { uid } = useParams<ParamTypes>();

	useEffect(() => {
		fetchInfo(uid);
		fetchIncidents(uid);
		fetchFriends(uid);
	}, []);

	useEffect(() => {
		if (user_info) {
			setProfileInfo(user_info);
		}
	}, [user_info]);

	return (
		<PageBlank>
			<ProfilePageContainer>
				<ProfileInfoBar user={profile_info} />
				<ProfileIncidentsContainer>
					{incidents.map((incident, i) => (
						<Post key={i} incident={incident} />
					))}
				</ProfileIncidentsContainer>
			</ProfilePageContainer>
		</PageBlank>
	);
};

export default PublicProfilePage;
