import React from 'react';
import './WeatherList.css';

// import WeatherCard from './WeatherCard';

class WeatherList extends React.Component {
  render() {
    // const { cards } = this.props;

    return (
      <div className="card-list">
        {/* {cards.map((card) => <WeatherCard key={card.title} card={card} />)} */}
      </div>
    );
  }
}

export default WeatherList;
