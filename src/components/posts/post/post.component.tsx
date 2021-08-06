import React from "react";

import Avatar from "../../common/avatar/avatar.component";
import PostBody from "../post-body/post-body.component";
import PostControls from "../post-controls/post-controls.component";
import {
	HeaderUserName,
	HeaderUserPhoto,
	PostContainer,
	PostHeader,
} from "./post.styles";
import PostProps from "./types";

const Post = (props: PostProps) => {
	return (
		<PostContainer>
			<Avatar
				photoURL={props.incident?.user.photoURL}
				username={props.incident?.user.username}
			/>
			<PostBody
				name={props.incident?.name}
				daysSince={props.incident?.days_since}
				wasReset={props.incident?.wasReset}
			/>
			<PostControls />
		</PostContainer>
	);
};

export default Post;
