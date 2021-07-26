import React, { useEffect, memo } from "react";
import ToolbarItemContainer from "../toolbar-item-container/toolbar-item-container.component";
import { SearchBarOpenContainer } from "./search-bar.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData, SearchData } from "../toolbar-item-container/types";
import { BsSearch } from "react-icons/bs";
import { useToolbarContext } from "../toolbar-main/toolbar-main.component";
import { ReportInput } from "../report/report.styles";
import { ButtonRight } from "../../common/custom-button/custom-button-alternates.styles";
import { useDispatch, useSelector } from "react-redux";
import { searchUsersStart } from "../../../redux/user/user.action";
import SearchBarResults from "../search-bar-results/search-bar-results.component";
import { UserQueryResult } from "../../../redux/user/types";
import { selectUsersSearchResult } from "../../../redux/user/user.selector";
import { State } from "../../../redux/root-reducer";

const SearchBar = () => {
	const dispatch = useDispatch();

	const searchUsers = (search: string) => dispatch(searchUsersStart(search));

	const userQuery = useSelector<State, UserQueryResult[]>((state) =>
		selectUsersSearchResult(state)
	);

	const { index, setIndex } = useToolbarContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SearchData>();

	const onSubmit: SubmitHandler<SearchData> = (data) => {
		searchUsers(data.query);
	};

	return (
		<ToolbarItemContainer
			onSubmit={handleSubmit(onSubmit)}
			onClick={() => setIndex(0)}
			icon={<BsSearch size="40px" />}
			open={index === 0}
		>
			<SearchBarOpenContainer>
				<BsSearch size="40px" />
				<ReportInput
					{...register("query", { required: true })}
					placeholder="Search Folly..."
				/>
				<ButtonRight>Search</ButtonRight>
			</SearchBarOpenContainer>
			<SearchBarResults users={userQuery} />
		</ToolbarItemContainer>
	);
};

export default memo(SearchBar);
