import { differenceInDays } from "date-fns";

interface INCIDENT_PROPS {
	name: string;
	incident_date: Date;
	days_since: number;
	comments: Array<string>;
}

class Incident {
	name = "";
	incident_date = new Date();
	days_since = 0;
	comments = [""];

	constructor(props: INCIDENT_PROPS) {
		this.name = props.name;
		this.incident_date = props.incident_date;
		this.days_since = differenceInDays(new Date(), this.incident_date);
		this.comments = props.comments;
	}

	resetDateToNow() {
		this.incident_date = new Date();
		return this;
	}
}

export default Incident;
