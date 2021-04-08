import React, { Component } from "react";
import Box from './BoxCard';

class BoxesList extends Component {
  state =  {
    persons : [
      {name: "Bristleback", position: 3, attribute: "STR"},
      {name: "Anti-Mage", position: 1, attribute: "AGI"},
      {name: "Witch Doctor", position: 5, attribute: "INT"}
    ]
  };

  handleClick = () => {
    this.setState({
      persons : [
        {name: "Centaur Warrunner", position: 3, attribute: "STR"},
        {name: "Phantom Assassin", position: 1, attribute: "AGI"},
        {name: "Crystal Maiden", position: 5, attribute: "INT"}
      ]
    });
  };

  render() {
    return (
      <div>
          <button onClick={this.handleClick}>CLICK ME!</button>
          <Box name={this.state.persons[0].name} position={this.state.persons[0].position} attribute={this.state.persons[0].attribute}/>
          <Box name={this.state.persons[1].name} position={this.state.persons[1].position} attribute={this.state.persons[1].attribute}/>
          <Box name={this.state.persons[2].name} position={this.state.persons[2].position} attribute={this.state.persons[2].attribute}/>
      </div>
  );
  }
}

export default BoxesList;