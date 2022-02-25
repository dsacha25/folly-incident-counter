import Notification from "../../../utils/classes/notification/notification";
import { NotifCategories } from "../../../utils/classes/notification/types";

// export interface Notification {
// 	notif_name: string | null;
// 	notif_category: NotifCategories;
// }

export type NotificationProps = {
	notif: Notification;
};
