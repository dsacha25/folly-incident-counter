import React, { useEffect } from "react";
import {
	NoficationName,
	NotifDate,
	NotificationInfo,
	NotifItemContainer,
} from "./notif-item.styles";
import { NotificationProps } from "./types";
import { AiOutlineUserAdd } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";

const NotificationItem = (props: NotificationProps) => {
	useEffect(() => {
		props.notif.constructNotification();
	}, []);

	const handleClose = () => {
		//
	};

	return (
		<NotifItemContainer onClickAway={handleClose}>
			<AiOutlineUserAdd size="50%" />
			<NotificationInfo>
				<NoficationName>{props.notif.message}</NoficationName>
				<NotifDate>{formatDistanceToNow(props.notif.createdAt)}</NotifDate>
			</NotificationInfo>
		</NotifItemContainer>
	);
};

export default NotificationItem;
