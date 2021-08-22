import React from "react";
import { Fade } from "@material-ui/core";
import {
	ContentContainer,
	ModalContainer,
	ModalBackdrop,
} from "./modal.styles";
import ModalPropTypes from "./types";

const Modal = (props: ModalPropTypes) => {
	return (
		<ModalContainer
			open={props.open}
			onClose={props.handleClose}
			BackdropComponent={ModalBackdrop}
			BackdropProps={{ timeout: 500 }}
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			closeAfterTransition
		>
			<Fade in={props.open}>
				<ContentContainer>{props.children}</ContentContainer>
			</Fade>
		</ModalContainer>
	);
};

export default Modal;
