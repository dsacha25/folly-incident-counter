import React from "react";
import Notification from "../../../utils/classes/notification/notification";
import { NotifCategories } from "../../../utils/classes/notification/types";
import NotificationItem from "../notif-item/notif-item.component";

import { NotifcationContainer } from "./notif-main.styles";

interface NotificationMainProps {
	open: boolean;
}

const NotificationMain = (props: NotificationMainProps) => {
	const notifications: Notification[] = [
		new Notification({
			user: { user_uid: "", username: "David Sacha" },
			info: {},
			category: NotifCategories.FRIEND_REQUEST,
		}),
	];

	return props.open ? (
		<NotifcationContainer>
			{notifications.map((notif, i) => (
				<NotificationItem key={i} notif={notif} />
			))}
		</NotifcationContainer>
	) : null;
};

export default NotificationMain;
