import './App.css';
import React, { Component } from 'react';
import Form from './Form';
import View from './View';

class App extends Component {
  state = {
    firstname : "First",
    lastname : "Last",
    phone : "0123456789",
    role : "Student",
    message : "Message here."
  }

  updateViewHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  render() {
    return (
      <div>
        <Form/>
        <View
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phone={this.state.phone}
        role={this.state.role}
        message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
