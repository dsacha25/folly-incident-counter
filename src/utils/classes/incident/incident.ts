import { differenceInDays } from "date-fns";
import { Comment } from "../../../redux/incidents/incidents.action-types";

interface INCIDENT_PROPS {
	id?: string;
	name: string;
	incident_date: Date;
	days_since?: number;
	comments?: Array<Comment>;
	likes?: number;
	likedByUser?: boolean;
}

class Incident {
	id: string = "";
	name: string = "";
	incident_date: Date = new Date();
	days_since: number = 0;
	comments: Array<Comment> = [];
	likes: number = 0;
	likedByUser: boolean = false;

	constructor(props: INCIDENT_PROPS) {
		this.name = props.name;
		this.incident_date = props.incident_date;
		this.days_since = differenceInDays(new Date(), this.incident_date);
		this.comments = props.comments ? props.comments : [];
		this.likes = props.likes ? props.likes : 0;
		this.likedByUser = props.likedByUser ? props.likedByUser : false;
		this.id = props.id ? props.id : "";
	}

	resetDateToNow(): Incident {
		this.incident_date = new Date();

		return this;
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

	getDataForFirebase(): INCIDENT_PROPS {
		return {
			name: this.name,
			incident_date: this.incident_date,
			days_since: this.days_since,
			comments: this.comments,
			likes: this.likes,
			likedByUser: this.likedByUser,
			id: this.id,
		};
	}
}

export default Incident;
