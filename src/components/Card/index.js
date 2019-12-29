import React from "react";

import { FaThermometerEmpty, FaThermometerFull } from "react-icons/fa";
import {
	TiWeatherCloudy,
	TiWeatherDownpour,
	TiWeatherNight,
	TiWeatherPartlySunny,
	TiWeatherShower,
	TiWeatherSnow,
	TiWeatherStormy,
	TiWeatherSunny,
	TiWeatherWindyCloudy,
	TiWeatherWindy
} from "react-icons/ti";

import {
	CardWrapper,
	Title,
	Subtitle,
	Icon,
	MicroIcon,
	Informations
} from "./styles";

export default function Card({ title, day, minimum, condition, maximum }) {
	function getConditionClime() {
		const clime =
			condition === "storm" ? (
				<TiWeatherStormy />
			) : condition === "snow" ? (
				<TiWeatherSnow />
			) : condition === "hail" ? (
				<TiWeatherDownpour />
			) : condition === "rain" ? (
				<TiWeatherShower />
			) : condition === "fog" ? (
				<TiWeatherWindyCloudy />
			) : condition === "clear_day" ? (
				<TiWeatherSunny />
			) : condition === "clear_night" ? (
				<TiWeatherWindy />
			) : condition === "cloud" ? (
				<TiWeatherCloudy />
			) : condition === "cloudly_day" ? (
				<TiWeatherPartlySunny />
			) : condition === "cloudly_night" ? (
				<TiWeatherWindyCloudy />
			) : condition === "none_day" ? (
				<TiWeatherSunny />
			) : condition === "none_night" ? (
				<TiWeatherNight />
			) : (
				<TiWeatherSunny />
			);

		return clime;
	}

	return (
		<>
			<CardWrapper>
				<Title>{title ? title : "-"}</Title>
				<Subtitle>{day ? day : "-"}</Subtitle>
				<Icon>{getConditionClime()}</Icon>
				<Informations>
					<MicroIcon>
						<FaThermometerEmpty />
						{minimum ? minimum : 0}
					</MicroIcon>
					<MicroIcon>
						<FaThermometerFull />
						{maximum ? maximum : 0}
					</MicroIcon>
				</Informations>
			</CardWrapper>
		</>
	);
}
