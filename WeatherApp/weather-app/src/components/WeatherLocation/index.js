import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
	CLOUD,
	CLOUDY,
	SUN,
	RAIN,
	SNOW,
	WINDY,
} from './../../constants/weather';

import './styles.css'

const data = {
	temperature: 5,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s'
}

const data2 = {
	temperature: 10,
	weatherState: WINDY,
	humidity: 20,
	wind: '30 m/s'
}

const location = 'Buenos Aires,ar';
const api_key = 'db9f7fd43d0898f5fed559aa203bbd9f';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

	constructor () {
		super();
		this.state = {
			city : 'Buenos Aires',
			data: data,
		};
	}


	handleUpdateClick = () => {
		fetch(api_weather).then( resolve => {
			
			return resolve.json();
		}).then( data=> {
			console.log(data);
		});

		console.log("actualizado");
		this.setState({
			city: 'Barcelona',
			data: data2,
		});
	}
	render() {
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location
					city={city}
				/>
				<WeatherData
					data={data} 
				/>
				<button onClick={this.handleUpdateClick}>Actualizar</button>
			</div>
		);
	}
};

export default WeatherLocation;