import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
	sunny: "day-sunny",
	fog: "day-fog",
	cloud : "cloud",
	cloudy: "cloudy",
	sun: 'sun',
	rain: 'rain',
	snow: 'snow',
	windy: 'windy',

}

const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	if (icon)
		return <WeatherIcons name={icon} size="12px" /> ;	
	else
		return <WeatherIcons name="day-sunny" size="12px" /> ;	
}

const WeatherTemperature = ({temperature, weatherState}) =>(
	<div> 
		<span> 
			{getWeatherIcon(weatherState)}
			{` ${temperature} º C `}
		</span>
		<span>
		{` ${weatherState}` }
		</span>
	</div>
	);

export default WeatherTemperature;