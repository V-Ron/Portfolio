import React, { Component } from 'react';
import 'App.css';
import Header from 'components/Header/index.js';
import Images from 'components/Images/index.js';
import ImageAvatars from 'components/IntroImage/index.js';
import Temperature from 'components/WeatherAPI/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageAvatars />
        <Images />
      </div>
    );
  }
}

export default App;
