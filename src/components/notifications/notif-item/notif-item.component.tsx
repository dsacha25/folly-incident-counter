import React from "react";
import { NotifItemContainer } from "./notif-item.styles";
import { NotificationProps } from "./types";
import { AiOutlineUserAdd } from "react-icons/ai";

const NotificationItem = (props: NotificationProps) => {
	return (
		<NotifItemContainer>
			<AiOutlineUserAdd /> Clickable Notication Name
		</NotifItemContainer>
	);
};

export default NotificationItem;
