import { differenceInDays, format } from "date-fns";
import { Comment } from "../../../redux/incidents/incidents.action-types";
import { Timestamp } from "../../firebase/types";

interface IncidentUserInfo {
	username?: string | null;
	user_uid?: string | null;
	photoURL?: string | null;
}

interface INCIDENT_PROPS {
	inc_uid?: string;
	name: string;
	incident_date: Date | Timestamp;
	comments?: Array<Comment>;
	likes?: number;
	likedByUser?: boolean;
	user: IncidentUserInfo;
	wasReset?: boolean;
}

const userDefault = { username: "", user_uid: "", photoURL: "" };

class Incident {
	inc_uid: string = "";
	name: string = "";
	incident_date: Date;
	days_since: number = 0;
	comments: Array<Comment>;
	likes: number = 0;
	likedByUser: boolean = false;
	user: IncidentUserInfo;
	wasReset: boolean = false;

	constructor(props: INCIDENT_PROPS) {
		this.name = props.name;
		this.incident_date =
			props.incident_date instanceof Date
				? props.incident_date
				: new Date(props.incident_date.seconds * 1000);
		this.days_since = differenceInDays(new Date(), this.incident_date);
		this.comments = props.comments ? props.comments : [];
		this.likes = props.likes ? props.likes : 0;
		this.likedByUser = props.likedByUser ? props.likedByUser : false;
		this.inc_uid = props.inc_uid ? props.inc_uid : "";
		this.user = props.user;
		this.wasReset = this.days_since < 1 ? true : false;
	}

	resetDateToNow(): Incident {
		this.incident_date = new Date();
		this.days_since = 0;
		this.wasReset = true;

		return new Incident(this);
	}

	unlikePost(): number | undefined {
		if (!this.likedByUser) return;
		this.likedByUser = false;

		return this.likes - 1;
	}

	likePost(): number | undefined {
		if (this.likedByUser) return;
		this.likedByUser = true;

		return this.likes + 1;
	}

	addComment(comment: Comment): Incident {
		this.comments.push(comment);
		return this;
	}

	getDateString(): string {
		return this.incident_date.toDateString();
	}

	getFormattedDate(): string {
		return format(this.incident_date, "MM/dd/yy");
	}

	getDataForFirebase(): INCIDENT_PROPS {
		return {
			name: this.name,
			incident_date: this.incident_date,
			comments: this.comments,
			likes: this.likes,
			likedByUser: this.likedByUser,
			inc_uid: this.inc_uid,
			wasReset: this.wasReset,
			user: this.user,
		};
	}
}

export default Incident;
