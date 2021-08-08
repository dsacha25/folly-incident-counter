import { NotificationPropTypes } from "./types";

class Notification {
	createdAt: Date;
	constructor(props: NotificationPropTypes) {
		this.createdAt = props.createdAt ? props.createdAt : new Date();
	}
}

export default Notification;
