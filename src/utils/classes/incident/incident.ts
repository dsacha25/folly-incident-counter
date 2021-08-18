import { differenceInDays, format } from "date-fns";
import { Comment } from "../../../redux/incidents/incidents.action-types";
import {
	IncidentPropTypes,
	IncidentReport,
	IncidentUserInfoType,
} from "./types";

class Incident {
	readonly user: IncidentUserInfoType;
	name: string = "";
	inc_uid: string = "";
	incident_date: Date;
	days_since: number = 0;
	comments: Comment[];
	likes: number = 0;
	likedByUser: boolean = false;
	wasReset: boolean = false;

	constructor(props: IncidentPropTypes) {
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

	updateNameAndDate(data: IncidentReport): Incident {
		this.name = data.name;
		this.incident_date = data.incident_date;

		return this;
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

	getDataForFirebase(): IncidentPropTypes {
		return {
			name: this.name,
			incident_date: this.incident_date,
			comments: this.comments,
			likes: this.likes,
			likedByUser: this.likedByUser,
			inc_uid: this.inc_uid,
			user: this.user,
		};
	}
}

// const inst = new Incident({
// 	name: "",
// 	incident_date: new Date(),
// 	user: { user_uid: "", username: "", photoURL: "" },
// });

export default Incident;
