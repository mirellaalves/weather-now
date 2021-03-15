import React from 'react';
import './WeatherCard.css';

class WeatherCard extends React.Component {
  render() {
    const { card } = this.props;

    return (
      <div className="card">
        {/* {cards.map((card) => <WeatherCard key={card.city} card={card} />)} */}
      </div>
    );
  }
}

export default WeatherCard;
