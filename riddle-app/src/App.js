import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "In Columbus it stands, bold and grand, where scarlet and gray fans take a stand.";
  const answer = 'stadium';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/Stadium.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
