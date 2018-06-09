import React, { Component } from 'react';
import '../styles/App.css';
import Menu from './Menu';
import Heading from './Heading';
import MusicPlayer from './MusicPlayer';
import Slideshow from './Slideshow';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <Heading />
        <Slideshow />
        <MusicPlayer />
      </div>
    );
  }
}

export default App;
