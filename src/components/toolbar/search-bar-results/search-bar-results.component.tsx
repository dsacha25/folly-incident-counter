import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearUserSearch } from "../../../redux/user/user.action";
import Avatar from "../../common/avatar/avatar.component";
import {
	SearchBarItem,
	SearchBarResultsContainer,
} from "./search-bar-results.styles";
import { SearchBarResultsProps } from "./types";

const SearchBarResults = (props: SearchBarResultsProps) => {
	const dispatch = useDispatch();

	const clearSearch = () => dispatch(clearUserSearch());

	const history = useHistory();

	const handleViewProfile = (uid: string) => {
		console.log("View User:", uid);
		clearSearch();
		history.push(`profile/${uid}`);
	};

	return (
		<SearchBarResultsContainer users={props.users}>
			{props.users.map((user) => (
				<SearchBarItem
					key={user.user_uid}
					onClick={() => handleViewProfile(user.user_uid)}
				>
					<Avatar
						noBorder
						username={user.username}
						photoURL={user.photoURL}
						user_uid={user.user_uid}
					/>
				</SearchBarItem>
			))}
		</SearchBarResultsContainer>
	);
};

export default SearchBarResults;
