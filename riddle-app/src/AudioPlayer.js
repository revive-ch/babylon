import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

function AudioPlayer({ audioSrc }) {
  return (
    <div>
      <h2>Here's the mission, listen carefully</h2>
      <ReactAudioPlayer
        src={audioSrc}
        autoPlay
        controls
      />
    </div>
  );
}

export default AudioPlayer;
