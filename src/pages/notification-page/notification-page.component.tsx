import React from "react";
import { useParams } from "react-router-dom";
import { ParamTypes } from "../../types";
import { PageBlank } from "../page-styles/page-styles.styles";

const NotficationPage = () => {
	const { notif_uid, notif_type } = useParams<ParamTypes>();
	return (
		<PageBlank>
			Notification
			{/*  */}
		</PageBlank>
	);
};

export default NotficationPage;
