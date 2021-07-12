import React from "react";
import {
	PostControlsContainer,
	Up,
	Down,
	ControlButtons,
} from "./post-controls.styles";
import PostControlProps from "./types";

const PostControls = (props: PostControlProps) => {
	const handleLikePost = () => {
		//
	};

	const handleExposePost = () => {
		//
	};

	return (
		<PostControlsContainer>
			<ControlButtons onClick={handleLikePost}>
				<Up /> Like
			</ControlButtons>
			<ControlButtons onClick={handleExposePost}>
				<Down /> Expose
			</ControlButtons>
		</PostControlsContainer>
	);
};

export default PostControls;
