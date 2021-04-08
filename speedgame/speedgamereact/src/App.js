import React, { Component } from 'react';
import Circle from './Components/Circle';
import './App.css';

class App extends Component {
  state = {
    circles: [
        {id: 1, color: "blue"},
        {id: 2, color: "green"},
        {id: 3, color: "yellow"},
        {id: 4, color: "brown"}
    ]
  };

  render() {
    return (
      <div>
        <h1>Speedgame</h1>
        <p>Score: </p>
        <div className="circles">
          {this.state.circles.map((c) => {
            return <Circle id={c.id} key={c.id} color={c.color}/>;
          })}
        </div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;
