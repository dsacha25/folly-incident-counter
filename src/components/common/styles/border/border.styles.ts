import { css } from "styled-components";

const BorderStyles = css`
	border: 2px solid ${({ theme }) => theme.lightAccent};
	border-radius: 20px;
`;

export default BorderStyles;
