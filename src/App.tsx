import './App.css';
import Game from './components/Game';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Rebellion</h1>
      <Game screenWidth={800} screenHeight={600} />
    </div>
  );
}

export default App;
