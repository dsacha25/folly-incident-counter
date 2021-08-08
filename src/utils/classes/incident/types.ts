import { Comment } from "../../../redux/incidents/incidents.action-types";
import { Timestamp } from "../../firebase/types";

export interface IncidentUserInfoType {
	username?: string | null;
	user_uid?: string | null;
	photoURL?: string | null;
}

export interface IncidentPropTypes {
	incident_date: Date | Timestamp;
	name: string;
	user: IncidentUserInfoType;
	inc_uid?: string;
	comments?: Comment[];
	likes?: number;
	likedByUser?: boolean;
}
