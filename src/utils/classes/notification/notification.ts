import { UserInfoType } from "../../../types";
import {
	NotificationCategories,
	NotificationPropTypes,
	NotifInfo,
} from "./types";

/* 
FACEBOOK URL EXAMPLE:


www.facebook.com/david.j.sacha/posts/10215756350742209?notif_id=1626260617124439&notif_t=feedback_reaction_generic&ref=notif

www.facebook.com/ === BASE URL
david.j.sacha/posts/ === USER
10215756350742209? === ???
notif_id=1626260617124439& === NOTIFICATION UID
notif_t=feedback_reaction_generic& === NOTIFICATION TYPE
**** other examples: 
******* story_reshare --- LINKS TO POST
******* close_friend_activity
******* group_activity 
******* friend_confirmed --- LINKS TO THEIR PROFILE
******* feedback_reaction_generic --- LINKS TO POST -> THEN SHOWS COMMENT


ref=notif === ??? its the same on all notifications so I'm not sure what it's purpose is
*/

class Notification {
	createdAt: Date = new Date();
	category: NotificationCategories = NotificationCategories.FRIEND_REQUEST;
	viewed: boolean = false;
	user: UserInfoType;
	message: string;
	info: NotifInfo;
	constructor(props: NotificationPropTypes) {
		this.createdAt = props.createdAt ? props.createdAt : this.createdAt;
		this.category = props.category ? props.category : this.category;
		this.viewed = props.viewed ? props.viewed : this.viewed;
		this.user = props.user;
		this.message = `${this.user.username} wants to be your friend!`;
		this.info = props.info;
	}

	constructUrl(category: NotificationCategories): string {
		switch (category) {
			case NotificationCategories.FRIEND_REQUEST:
				return `/friends`;

			case NotificationCategories.FRIEND_REQUEST_ACCEPTED:
				return `/profile/${this.user.user_uid}`;

			case NotificationCategories.INCIDENT_COMMENT:
			case NotificationCategories.INCIDENT_LIKED:
			case NotificationCategories.INCIDENT_EXPOSED:
				return `/notification/${this.info.source_uid}`;

			default:
				return "";
		}
	}

	setNotificationMessage(category: NotificationCategories) {
		switch (category) {
			case NotificationCategories.FRIEND_REQUEST:
				return this.setMessage(
					`${this.user.username} wants to be your friend!`
				);
			case NotificationCategories.FRIEND_REQUEST_ACCEPTED:
				return this.setMessage(
					`${this.user.username} accepted your friend request!`
				);
			case NotificationCategories.INCIDENT_COMMENT:
				return this.setMessage(
					`${this.user.username} commented on your incident.` /// NEED SOME WAY TO ID WHICH ONE AND LINK
				);
			case NotificationCategories.INCIDENT_EXPOSED:
				return this.setMessage(
					`${this.user.username} exposed your incident!` /// NEED SOME WAY TO ID WHICH ONE AND LINK
				);
			case NotificationCategories.INCIDENT_LIKED:
				return this.setMessage(
					`${this.user.username} liked your incident.` /// NEED SOME WAY TO ID WHICH ONE AND LINK
				);
			default:
				break;
		}
	}

	setMessage(message: string) {
		this.message = message;
	}
}

export default Notification;
