import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Avatar from "../../components/common/avatar/avatar.component";
import CustomButton from "../../components/common/custom-button/custom-button.component";
import { Label } from "../../components/common/input-with-label/input-with-label.styles";
import { fetchProfileInfoStart } from "../../redux/profile/profile.action";
import {
	selectProfileIsFriend,
	selectProfileUser,
} from "../../redux/profile/profile.selector";
import { Profile } from "../../redux/profile/types";
import { State } from "../../redux/root-reducer";
import { PageBlank, PageMain } from "../page-styles/page-styles.styles";
import { ProfilePageContainer } from "./public-profile-page.style";

interface ParamTypes {
	uid: string;
}

const PublicProfilePage = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const fetchInfo = (uid: string) => dispatch(fetchProfileInfoStart(uid));
	const user_info = useSelector<State, Profile | null>((state) =>
		selectProfileUser(state)
	);
	const isFriend = useSelector<State, boolean>((state) =>
		selectProfileIsFriend(state)
	);

	const [profile_info, setProfileInfo] = useState<Profile>({
		displayName: "",
		email: "",
		photoURL: "",
	});

	const { uid } = useParams<ParamTypes>();

	const handleAddFriend = () => {
		//
	};

	const handleRemoveFriend = () => {
		//
	};

	const handleReturn = () => {
		history.goBack();
	};

	useEffect(() => {
		fetchInfo(uid);
	}, []);

	useEffect(() => {
		if (user_info) {
			setProfileInfo(user_info);
		}
	}, [user_info]);

	return (
		<PageBlank>
			<ProfilePageContainer>
				<Avatar
					username={profile_info.displayName}
					photoURL={profile_info.photoURL}
				/>
				<div>
					<div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
						<Label>Email:</Label> <Label>{profile_info.email}</Label>
					</div>
					<div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
						<Label>Friends:</Label> <Label>0</Label>
					</div>
					{isFriend ? (
						<CustomButton onClick={handleRemoveFriend}>
							Remove Friend
						</CustomButton>
					) : (
						<CustomButton onClick={handleAddFriend}>Add Friend</CustomButton>
					)}
					<CustomButton onClick={handleReturn}>Return</CustomButton>
					<div>INCIDENTS</div>
				</div>
			</ProfilePageContainer>
		</PageBlank>
	);
};

export default PublicProfilePage;
