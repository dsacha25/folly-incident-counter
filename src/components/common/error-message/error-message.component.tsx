import React from "react";
import { ErrorMessageProps } from "./types";
import { ErrorMessageText } from "./error-message.styles";

const ErrorMessage = (props: ErrorMessageProps) =>
	props.error ? <ErrorMessageText>{props.error}</ErrorMessageText> : null;

export default ErrorMessage;
