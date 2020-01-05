import React, { useState, useEffect } from "react";

import api from "../../services/api";

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
	Container,
	Title,
	Subtitle,
	Icon,
	Temp,
	Condition,
	InformationWrapper,
	Informations,
	InformationsLabel,
	Scroll
} from "./styles";

import Card from "../Card/index";

export default function Main() {
	const [weather, setWeather] = useState({});

	useEffect(() => {
		async function connectApiWeather() {
			const response = await api.get("");

			setWeather(response.data.results);
		}
		connectApiWeather();
	}, []);

	const {
		temp,
		date,
		description,
		city_name: city,
		humidity,
		wind_speedy: wind,
		sunrise,
		sunset,
		condition_slug: condition,
		forecast
	} = weather;

	function getDayWeekly() {
		const dataObj = new Date();

		let day =
			dataObj.getDay() === 0
				? "Dom"
				: dataObj.getDay() === 1
				? "Seg"
				: dataObj.getDay() === 2
				? "Ter"
				: dataObj.getDay() === 3
				? "Qua"
				: dataObj.getDay() === 4
				? "Qui"
				: dataObj.getDay() === 5
				? "Sex"
				: "Sáb";

		return day;
	}

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
			<Container className="set-padding">
				<Title>{city}</Title>
				<Subtitle>
					{getDayWeekly()}, {date}
				</Subtitle>
				<Container>
					<Icon>{getConditionClime()}</Icon>

					<Container
						style={{ paddingLeft: 40, paddingRight: 40 }}
						className="set-border flex-none flex-column set-padding tablet-full"
					>
						<Temp>{temp}°</Temp>
						<Condition>{description}</Condition>
					</Container>

					<Container className="tablet-full set-bordertop-tablet">
						<InformationWrapper>
							<Informations>-</Informations>
							<InformationsLabel>Min.</InformationsLabel>
						</InformationWrapper>

						<InformationWrapper>
							<Informations>-</Informations>
							<InformationsLabel>Max.</InformationsLabel>
						</InformationWrapper>

						<InformationWrapper>
							<Informations>{wind}</Informations>
							<InformationsLabel>Vel. Vento</InformationsLabel>
						</InformationWrapper>

						<InformationWrapper>
							<Informations>{humidity}%</Informations>
							<InformationsLabel>Umidade</InformationsLabel>
						</InformationWrapper>

						<InformationWrapper>
							<Informations>{sunrise}</Informations>
							<InformationsLabel>Amanhecer</InformationsLabel>
						</InformationWrapper>

						<InformationWrapper>
							<Informations>{sunset}</Informations>
							<InformationsLabel>Anoitecer</InformationsLabel>
						</InformationWrapper>
					</Container>
				</Container>
			</Container>

			<Container className="flex-none full">
				<Scroll>
					{forecast
						? forecast.map((each, key) => {
								const { weekday, min, max, condition, date } = each;
								return (
									<Card
										key={weekday + key}
										title={weekday}
										day={date}
										minimum={min}
										maximum={max}
										condition={condition}
									/>
								);
						  })
						: ""}
				</Scroll>
			</Container>
		</>
	);
}
