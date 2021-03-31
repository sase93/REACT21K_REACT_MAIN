import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter : 0
  }

  increaseHandler = () => {
    this.setState({
      counter : this.state.counter + 1
    });
  };

  decreaseHandler = () => {
    if (this.state.counter > 0){
      this.setState({
        counter : this.state.counter - 1
      });
    }
  };

  resetHandler = () => {
    this.setState({
      counter : 0
    });
  };

  render() {
    let circleClass = `${this.state.counter === 0 ? "" : this.state.counter % 2 === 0 ? "even" : "odd"} circle`;

    return (
      <div>
        <h1 className={circleClass}>{this.state.counter}</h1>
        <button onClick={this.increaseHandler}>+</button>
        <button onClick={this.decreaseHandler}>-</button>
        <button onClick={this.resetHandler}>0</button>
      </div>
    );
  }
}

export default App;
