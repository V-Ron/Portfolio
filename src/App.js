import React, { Component } from 'react';
import 'App.css';
import MainPage from 'components/MainPage/index.js';
import Images from 'components/Images/index.js';
import Temperature from 'components/WeatherAPI/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <Images />
      </div>
    );
  }
}

export default App;
