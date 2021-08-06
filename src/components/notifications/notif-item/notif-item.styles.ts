import styled from "styled-components";

export const NotifItemContainer = styled.div`
	display: grid;
	width: 100%;
	height: 60px;

	border-radius: 30px;
	border: 1px solid ${({ theme }) => theme.lightAccent};
`;
