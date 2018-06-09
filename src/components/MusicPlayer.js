import React, { Component } from 'react';
import AudioPlayer from 'react-responsive-audio-player';

class MusicPlayer extends Component {

  render() {
    let song = [
      {url: "/audio/downtowngirls.mp3",
       title: "Downtown Girls"},
       {url: "/audio/heavymetalangel.mp3",
       title: "Heavy Metal Angel"},      
       {url: "/audio/tenangels.mp3",
       title: "Ten Angels"},
       {url: "/audio/trainride.mp3",
       title: "Train Ride"}       
    ]
    return (
      <div className="musicPlayer">
          <AudioPlayer playlist={song}
          />
      </div>
    )
  }
}

export default MusicPlayer;