import styled from "styled-components";
import Dash from "../../../assets/dash/Dash.png";
import UpArrow from "../../../assets/arrows/up/UpTrend_Arrow.png";
import DownArrow from "../../../assets/arrows/down/DownTrend_Arrow.png";
import PostBodyProps from "./types";

export const PostBodyContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-rows: 0.2fr 0.8fr;
`;

export const TitleContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	margin: 15px 0 0 50px;

	place-items: center;
	grid-template-columns: auto auto 1fr;

	@media screen and (max-width: 800px) {
		margin: 15px 0 0 15px;
	}
`;

export const Title = styled.p`
	font-size: 20px;
	font-weight: 100;
	font-stretch: 92%;
	font-style: italic;
	padding: 10px 0;
	margin: 0;
	place-self: flex-start flex-end;

	@media screen and (max-width: 800px) {
		font-size: 16px;
		padding: 0;
	}
`;

export const DashDivider = styled.div`
	width: 30px;
	height: 100%;
	background: url(${Dash});
	background-size: contain;
	background-repeat: no-repeat;
`;

export const IncidentName = styled.p`
	font-size: 40px;
	font-weight: 900;
	font-stretch: 80%;
	font-style: italic;
	padding: 0 0 5px 0;
	margin: 0;
	place-self: flex-end flex-start;

	@media screen and (max-width: 800px) {
		font-size: 30px;
	}
`;

export const DaysContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	width: 100%;
	height: 100%;
	place-items: center;
`;

export const DaysSince = styled.p`
	font-size: 180px;
	font-weight: 100;
	font-stretch: 125%;
	font-style: italic;
	padding: 0 0 0 10px;
	margin: 0;
	justify-self: flex-start;

	@media screen and (max-width: 800px) {
		font-size: 60px;
	}
`;

export const Arrow = styled.div<PostBodyProps>`
	width: 80px;
	height: 100px;
	background: url(${({ wasReset }) => (wasReset ? DownArrow : UpArrow)});
	background-size: contain;
	background-repeat: no-repeat;
	justify-self: flex-end;

	@media screen and (max-width: 800px) {
		width: 40px;
		height: 50px;
	}
`;
