import React from 'react';
import './App.css';

import Header from './components/Header.jsx';
import WeatherList from './components/WeatherList.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherList />
    </div>
  );
}

export default App;
