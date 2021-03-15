import React from 'react';
import './WeatherCard.css';
import api from '../services/api';

class WeatherCard extends React.Component {
  state = {
    weather: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data);
    this.setState({ weather: response.data });
  }

  render() {

    const { weather } = this.state
    
    console.log(weather)

    return (
      <div className="card">
        <p>{weather.name}, {weather.sys.country}</p>
        <p>{weather.main.temp}°</p>
        <p>HUMIDITY {weather.main.humidity}%</p>
        <p>PRESSURE {weather.main.pressure}hPa</p>
      </div>
    );
  }
}

export default WeatherCard;
