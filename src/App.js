import React, { Component } from 'react';
import Board from './components/Board.js'
import Rack from './components/Rack.js'
import Tile from './components/Tile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <master className="master">
            <Board></Board>
          </master>
          <Rack className="rack">
              <Tile id="tile_1" className="tile" draggable="true"><p><h1>A</h1></p></Tile>
              <Tile id="tile_2" className="tile" draggable="true"><p><h1>B</h1></p></Tile>
              <Tile id="tile_3" className="tile" draggable="true"><p><h1>C</h1></p></Tile>
              <Tile id="tile_4" className="tile" draggable="true"><p><h1>D</h1></p></Tile>
              <Tile id="tile_5" className="tile" draggable="true"><p><h1>E</h1></p></Tile>
              <Tile id="tile_6" className="tile" draggable="true"><p><h1>F</h1></p></Tile>
              <Tile id="tile_7" className="tile" draggable="true"><p><h1>G</h1></p></Tile>
          </Rack>
      </div>
    );
  }
}

export default App;
