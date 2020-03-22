import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import {
	CLOUD,
	CLOUDY,
	RAIN,
	SNOW,
	WINDY,
	SUNNY,
	FOG
} from './../constants/constants'
const WeatherData = () => (
	<div>
		<WeatherTemperature 
			temperature={32} 
			weatherState={SUNNY}
		/>
		<WeatherExtraInfo 
			humidity={80} 
			wind={"10 m/s"}
		/>
	</div>
	);

export default WeatherData;
