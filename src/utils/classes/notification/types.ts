import { UserInfoType } from "../../../types";

export enum NotificationCategories {
	FRIEND_REQUEST = "FRIEND_REQUEST",
	FRIEND_REQUEST_ACCEPTED = "FRIEND_REQUEST_ACCEPTED",
	INCIDENT_LIKED = "INCIDENT_LIKED",
	INCIDENT_COMMENT = "INCIDENT_COMMENT",
	INCIDENT_EXPOSED = "INCIDENT_EXPOSED",
}

export interface NotifInfo {
	url: string;
	source_uid?: string;
	source_name?: string;
}

export interface NotificationPropTypes {
	createdAt?: Date;
	category?: NotificationCategories;
	user: UserInfoType;
	viewed?: boolean;
	info: NotifInfo;
}
