import { UserInfoType } from "../../../types";

export enum NotifCategories {
	FRIEND_REQUEST = "friend_request",
	FRIEND_REQUEST_ACCEPTED = "friend_request_accepted",
	INCIDENT_LIKED = "inc_liked",
	INCIDENT_COMMENT = "inc_comment",
	INCIDENT_EXPOSED = "inc_exposed",
}

export interface NotifInfo {
	url?: string;
	notif_source_uid?: string;
	notif_source_name?: string;
}

export interface NotificationPropTypes {
	user: UserInfoType;
	info: NotifInfo;
	notif_url?: string;
	notif_uid?: string;
	createdAt?: Date;
	category?: NotifCategories;
	viewed?: boolean;
}
