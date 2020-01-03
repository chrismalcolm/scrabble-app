import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'
import './main.css';

// TODO
// Only allow one child tile for each space
// Create function to get current rack array or board array
// Fix display of tiles

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
