import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	flex: 1; /** O pai não pode ter display: flex */

	&.flex-none {
		flex: none;
	}

	&.flex-column {
		flex-direction: column;
	}

	&.set-padding {
		padding: 0 15px;
	}

	&.set-border {
		border-right: 1px solid rgba(255, 255, 255, 0.4);
		margin-right: 15px;

		@media screen and (max-width: 991px) {
			border-right: none;
		}
	}

	&.set-bordertop-tablet {
		@media screen and (max-width: 991px) {
			border-top: 1px solid #fff;
			max-width: 575px;
			width: 100%;
		}
	}

	&.full {
		width: 100%;
	}

	&.tablet-full {
		@media screen and (max-width: 991px) {
			flex: none;
			width: 100%;
		}
	}
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	margin-top: 30px;
	width: 100%;

	@media screen and (max-width: 991px) {
		text-align: center;
	}
`;

export const Subtitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 30px;
	width: 100%;

	@media screen and (max-width: 991px) {
		text-align: center;
	}
`;

export const Icon = styled.span`
	svg {
		font-size: 15rem;

		@media screen and (max-width: 1080px) {
			font-size: 10rem;
		}

		@media screen and (max-width: 991px) {
			font-size: 15rem;
		}
	}
`;

export const Temp = styled.h3`
	font-size: 8rem;
	font-weight: 700;
	text-align: center;

	@media screen and (max-width: 1080px) {
		font-size: 6rem;
	}
`;

export const Condition = styled.p`
	font-size: 1.5rem;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 991px) {
		margin-bottom: 40px;
	}
`;

export const InformationWrapper = styled.div`
	padding: 15px;
	width: 33.333%;

	@media screen and (max-width: 475px) {
		align-self: flex-end;
		width: 50%;
	}
`;

export const Informations = styled.span`
	display: block;
	font-size: 1.5rem;
	font-weight: 700;
`;

export const InformationsLabel = styled.h5`
	font-size: 1rem;
	font-weight: 300;
`;

export const Scroll = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
	padding: 15px;
	margin-left: 15px;
	margin-right: 15px;
`;
