import React from 'react';

const BoxCard = (props) => {
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

export default BoxCard;