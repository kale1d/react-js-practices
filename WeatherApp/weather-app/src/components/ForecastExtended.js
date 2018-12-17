import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast';

import ForecastItem from './ForecastItem';


import './styles.css'

// const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal',
// }

export const api_key = 'db9f7fd43d0898f5fed559aa203bbd9f';
export const url = 'http://api.openweathermap.org/data/2.5/forecast';


class ForecastExtended extends Component {

  constructor(){
    super();
    this.state = {
      forecastData: null,
    }
  }

  componentDidMount() {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({forecastData});
      }
    )
  }

  renderForecastItemDays(forecastData) {

     return forecastData.map( forecast => (
   <ForecastItem
    key={`${forecast.weekDay}${forecast.hour}`}
    weekDay={forecast.weekDay}
    hour = {forecast.hour}
    data={forecast.data}
  />))
  }

  renderProgress = () => {
    return <h3>Cargando Pronostico extendido</h3>;
  }  

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return(
      <div>
        <h2 className="forecast-title">
        Pronostico extendido para {city}
        </h2>
        {forecastData ? 
        this.renderForecastItemDays(forecastData) :
        this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;