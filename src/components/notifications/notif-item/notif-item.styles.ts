import { ClickAwayListener } from "@material-ui/core";
import styled from "styled-components";

export const NotifItemContainer = styled(ClickAwayListener)`
	display: grid;
	width: 90%;
	height: 60px;

	border-radius: 30px;
	/* border: 1px solid ${({ theme }) => theme.lightAccent}; */

	grid-template-columns: 50px 1fr;
	overflow-wrap: break-word;

	place-items: center;
	pointer-events: none;
`;

export const NotificationInfo = styled.div`
	display: grid;
	place-items: center flex-start;
	width: 100%;
	height: 90%;

	grid-template-rows: 1fr auto;
`;

export const NoficationName = styled.p`
	font-size: 14px;
	place-self: center flex-start;
	max-width: 250px;
	overflow-wrap: break-word;
	white-space: normal;

	text-align: left;

	padding: 0;
	margin: 0;
`;

export const NotifDate = styled.p`
	font-size: 12px;
	place-self: center flex-start;
	padding: 0;
	margin: 0;

	color: ${({ theme }) => theme.main};

	text-transform: none;
`;
