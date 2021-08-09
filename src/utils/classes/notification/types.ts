import { UserInfoType } from "../../../types";

export enum NotificationCategories {
	FRIEND_REQUEST = "FRIEND_REQUEST",
	FRIEND_REQUEST_ACCEPTED = "FRIEND_REQUEST_ACCEPTED",
	INCIDENT_LIKED = "INCIDENT_LIKED",
	INCIDENT_COMMENT = "INCIDENT_COMMENT",
	INCIDENT_EXPOSED = "INCIDENT_EXPOSED",
}

export interface NotifInfo {
	url?: string;
	notif_source_uid?: string;
	notif_source_name?: string;
}

export interface NotificationPropTypes {
	user: UserInfoType;
	info: NotifInfo;
	notif_uid?: string;
	createdAt?: Date;
	category?: NotificationCategories;
	viewed?: boolean;
}
