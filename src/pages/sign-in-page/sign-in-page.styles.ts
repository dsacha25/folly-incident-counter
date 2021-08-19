import styled from "styled-components";

export const SignInForm = styled.form`
	display: grid;
	height: 40vh;
	width: 30vw;
	place-items: center;

	grid-template-rows: auto repeat(3, 1fr) auto;

	@media screen and (max-width: 800px) {
		width: 90vw;
		height: 70vh;

		place-items: flex-start center;
		place-self: flex-start center;

		grid-template-rows: repeat(3, 80px) auto;
	}
`;
