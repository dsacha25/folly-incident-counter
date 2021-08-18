import { UserInfoType } from "../../../types";
import { NotifCategories, NotificationPropTypes, NotifInfo } from "./types";

/* 
FACEBOOK URL EXAMPLE:


www.facebook.com/david.j.sacha/posts/10215756350742209?notif_id=1626260617124439&notif_t=feedback_reaction_generic&ref=notif

www.facebook.com/ === BASE URL
david.j.sacha/ === Username | user_uid
posts/ === What
10215756350742209? === ???
notif_id=1626260617124439& === NOTIFICATION UID
notif_t=feedback_reaction_generic& === NOTIFICATION TYPE
ref=notif === ??? its the same on all notifications so I'm not sure what it's purpose is


**** other examples: 
******* story_reshare --- LINKS TO POST
******* close_friend_activity
******* group_activity 
******* friend_confirmed --- LINKS TO THEIR PROFILE
******* feedback_reaction_generic --- LINKS TO POST -> THEN SHOWS COMMENT


*/

class Notification {
	public createdAt: Date = new Date();
	public category: NotifCategories = NotifCategories.FRIEND_REQUEST;
	public info: NotifInfo;
	public message: string;
	public notif_uid: string;
	public viewed: boolean = false;
	public user: UserInfoType;
	constructor(props: NotificationPropTypes) {
		this.notif_uid = props.notif_uid ? props.notif_uid : "";
		this.createdAt = props.createdAt ? props.createdAt : this.createdAt;
		this.category = props.category ? props.category : this.category;
		this.viewed = props.viewed ? props.viewed : this.viewed;
		this.user = props.user;
		this.message = `${this.user.username} wants to be your friend!`;
		this.info = props.info;
	}

	private setMessage(message: string): Notification {
		this.message = message;
		return this;
	}

	private constructUrl(): string {
		switch (this.category) {
			case NotifCategories.FRIEND_REQUEST:
				return `/friends`;

			case NotifCategories.FRIEND_REQUEST_ACCEPTED:
				return `/profile/${this.user.user_uid}`;

			case NotifCategories.INCIDENT_COMMENT:
			case NotifCategories.INCIDENT_LIKED:
			case NotifCategories.INCIDENT_EXPOSED:
				return `/notification/${this.info.notif_source_uid}/${this.category}`;

			default:
				return "";
		}
	}

	private setNotificationMessage(): Notification {
		switch (this.category) {
			case NotifCategories.FRIEND_REQUEST:
				return this.setMessage(
					`${this.user.username} wants to be your friend!`
				);
			case NotifCategories.FRIEND_REQUEST_ACCEPTED:
				return this.setMessage(
					`${this.user.username} accepted your friend request!`
				);
			case NotifCategories.INCIDENT_COMMENT:
				return this.setMessage(
					`${this.user.username} commented on your incident.` /// NEED SOME WAY TO ID WHICH ONE AND LINK
				);
			case NotifCategories.INCIDENT_EXPOSED:
				return this.setMessage(
					`${this.user.username} exposed your incident!` /// NEED SOME WAY TO ID WHICH ONE AND LINK
				);
			case NotifCategories.INCIDENT_LIKED:
				return this.setMessage(
					`${this.user.username} liked your incident.` /// NEED SOME WAY TO ID WHICH ONE AND LINK
				);
			default:
				return this;
		}
	}

	public constructNotification(): Notification {
		this.info.url = this.constructUrl();

		return this.setNotificationMessage();
	}

	public dataToFirebase(): NotificationPropTypes {
		return {
			user: this.user,
			info: this.info,
			notif_uid: this.notif_uid,
			createdAt: this.createdAt,
			category: this.category,
			viewed: this.viewed,
		};
	}
}

export default Notification;
