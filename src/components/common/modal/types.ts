import { ModalProps } from "@material-ui/core";

interface ModalPropTypes extends ModalProps {
	handleClose?: () => void;
}

export default ModalPropTypes;
