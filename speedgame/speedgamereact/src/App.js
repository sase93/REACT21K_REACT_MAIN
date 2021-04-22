import React, { Component } from 'react';
import Circle from './Components/Circle';
import './App.css';
import GameOver from './Components/GameOver'

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    circles: [
        {id: 1, color: "blue"},
        {id: 2, color: "green"},
        {id: 3, color: "yellow"},
        {id: 4, color: "brown"}
    ],
    score: 0,
    current: 0,
    showGameOver: false
  };

  timer = undefined;
  speed = 2000;

  clickHandler = (id) => {
    console.log(id + " clicked!");
    this.setState({
      score: this.state.score + 1
    });
  }

  nextTarget  = () => {
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1,4);
    } while (this.state.current === nextActive);

    this.setState({
      current: nextActive
    });

    this.speed *= 0.95;
    this.timer = setTimeout(this.nextTarget, this.speed);

    console.log("Active target is: " + this.state.current);
  }

  startHandler = () => {
    this.nextTarget();
  }
  
  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true
    });
  }

  render() {
    const circlesList = this.state.circles.map((c) => {
      return <Circle id={c.id} key={c.id} color={c.color} click={() => this.clickHandler(c.id)} active={this.state.current === c.id}/>;
    });

    return (
      <div>
        <h1>Speedgame</h1>
        <p>Score: {this.state.score}</p>
        <div className="circles">
          {circlesList}
        </div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score}/>}
      </div>
    );
  }
}

export default App;
