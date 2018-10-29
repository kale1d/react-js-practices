import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
  <div>
    <WeatherLocation city="buenos aires,ar"/>
    <WeatherLocation city="Bogota,col"/>
    <WeatherLocation city="Mexico,mex"/>
  </div>

)

export default LocationList;