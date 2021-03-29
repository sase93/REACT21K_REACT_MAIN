import React, { Component } from "react";

const Box = (props) => {
  function consoleLog() {
    console.log('sup');
  };

  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Position: {props.position}</p>
      <p>Main attribute: {props.attribute}</p>
      <button onClick={consoleLog}>Click me</button>
    </div>
  );
};

class Main extends Component {
  state =  {
    persons : [
      {name: "Bristleback", position: 3, attribute: "STR"},
      {name: "Anti-Mage", position: 1, attribute: "AGI"},
      {name: "Witch Doctor", position: 5, attribute: "INT"}
    ]
  };

  otherConsoleLog = () => {
    console.log('ey');
  };

  render() {
    return (
      <div>
          <button onClick={this.otherConsoleLog}>CLICK ME!</button>
          <Box name={this.state.persons[0].name} position={this.state.persons[0].position} attribute={this.state.persons[0].attribute}/>
          <Box name={this.state.persons[1].name} position={this.state.persons[1].position} attribute={this.state.persons[1].attribute}/>
          <Box name={this.state.persons[2].name} position={this.state.persons[2].position} attribute={this.state.persons[2].attribute}/>
      </div>
  );
  }
}

export default Main;