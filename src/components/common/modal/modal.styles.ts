import styled from "styled-components";
import { Modal, Backdrop } from "@material-ui/core";

export const ModalContainer = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 2100 !important;
`;

export const ModalBackdrop = styled(Backdrop)`
	&.MuiBackdrop-root {
		background-color: rgba(10, 10, 13, 0.8);
		backdrop-filter: blur(3px);
	}
`;

export const ContentContainer = styled.div`
	display: grid;
	place-items: center;

	background-color: ${({ theme }) => theme.darkAccent};
	/* border: 1px solid ${({ theme }) => theme.lightAccent}; */
	border-radius: 35px;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
		0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
	padding: 20px 60px;
	width: 80%;
	height: 80%;
	min-width: 600px;
	min-height: 200px;

	&:focus {
		outline: none;
	}
`;
