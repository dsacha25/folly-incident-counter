import styled from "styled-components";
import FollyIconLg from "../../assets/folly_brand/FollyIcon_512.png";

export const PageMain = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	max-height: 100vh;
	overflow-y: auto;

	place-items: center;

	@media screen and (max-width: 800px) {
		max-width: 100vw;
	}
`;

export const PageContentContainer = styled.div`
	display: grid;
	height: 100%;
	width: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	place-items: center;

	z-index: 1;

	@media screen and (max-width: 800px) {
		overflow: hidden;
		width: 100vw;

		padding-top: unset;
	}
`;

export const BackgroundLogo = styled.div`
	display: grid;
	position: absolute;
	width: 1800px;
	height: 1800px;
	z-index: 0;

	background: url(${FollyIconLg});
	background-repeat: no-repeat;
	background-size: contain;

	top: -800px;
	right: -800px;

	opacity: 0.1;

	@media screen and (max-width: 800px) {
		width: 1400px;
		height: 1400px;
		top: -575px;
		right: -800px;
	}
`;

export const PageBlank = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	max-width: 100vw;
	max-height: 100vh;
	place-items: center;

	/* 
	background: linear-gradient(
		180deg,
		rgba(242, 242, 242, 1) 0%,
		rgba(153, 179, 209, 1) 100%
	); 
	*/

	background: linear-gradient(
		180deg,
		rgba(13, 13, 13, 1) 0%,
		rgba(32, 46, 65, 1) 100%
	);
`;
