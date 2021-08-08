import { UserInfoType } from "../../../types";

export interface NotificationPropTypes {
	createdAt?: Date;
	type?: string;
	user: UserInfoType;
}
