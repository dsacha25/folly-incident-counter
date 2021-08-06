import styled from "styled-components";

export const NotifcationContainer = styled.div`
	display: grid;
	place-items: center;

	width: 200px;
	height: 600px;

	border: 1px solid ${({ theme }) => theme.lightAccent};
	border-radius: 20px;
`;
