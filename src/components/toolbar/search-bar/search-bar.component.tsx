import React, { memo } from "react";
import ToolbarItemContainer from "../toolbar-item-container/toolbar-item-container.component";
import { SearchBarOpenContainer } from "./search-bar.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../toolbar-item-container/types";
import { BsSearch } from "react-icons/bs";
import { useToolbarContext } from "../toolbar-main/toolbar-main.component";
import { ReportInput } from "../report/report.styles";
import { ButtonRight } from "../../common/custom-button/custom-button-alternates.styles";

const SearchBar = () => {
	const { index, setIndex } = useToolbarContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		//
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
		</ToolbarItemContainer>
	);
};

export default memo(SearchBar);
