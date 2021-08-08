import React from "react";
import callFirebaseFunction from "../../../utils/methods/call-firebase-function.method";
import {
	FriendRequestContainer,
	RequestButton,
	Username,
} from "./friend-request.styles";
import { FriendRequestProps } from "../types";
import { FiCheck } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

const FriendRequest = (props: FriendRequestProps) => {
	const handleAcceptRequest = async () => {
		await callFirebaseFunction("acceptFriendRequest", { user_uid: props.uid });
	};

	const handleDeclineRequest = async () => {
		await callFirebaseFunction("declineFriendRequest", { user_uid: props.uid });
	};

	return (
		<FriendRequestContainer>
			<Username>{props.username}</Username>
			<RequestButton onClick={handleAcceptRequest}>
				<FiCheck size="40px" />
			</RequestButton>
			<RequestButton onClick={handleDeclineRequest}>
				<GiCancel size="40px" />
			</RequestButton>
		</FriendRequestContainer>
	);
};

export default FriendRequest;
