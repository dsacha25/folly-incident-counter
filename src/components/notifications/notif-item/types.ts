export interface Notification {
	notif_name: string | null;
	notif_type: string | null;
}

export type NotificationProps = {
	notif: Notification;
};
