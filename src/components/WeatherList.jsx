import React from 'react';
import './WeatherList.css';

import WeatherCard from './WeatherCard';

class WeatherList extends React.Component {
  render() {
    return (
      <div className="card-list">
        <WeatherCard />
      </div>
    );
  }
}

export default WeatherList;
