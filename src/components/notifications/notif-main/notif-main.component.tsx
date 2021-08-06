import React from "react";
import NotificationItem from "../notif-item/notif-item.component";
import { Notification } from "../notif-item/types";
import { NotifcationContainer } from "./notif-main.styles";

const NotificationMain = () => {
	const notifications: Array<Notification> = [];

	return (
		<NotifcationContainer>
			{notifications.map((notif, i) => (
				<NotificationItem key={i} notif={notif} />
			))}
		</NotifcationContainer>
	);
};

export default NotificationMain;
