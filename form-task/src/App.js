import './App.css';
import React, { Component } from 'react';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {
  state = {
    firstname : "",
    lastname : "",
    phone : "",
    role : "Student",
    message : "",
    showPopup : false
  }

  updateViewHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  showPopupHandler = (event) => {
    this.setState({
      showPopup: true
    });
  }

  render() {
    return (
      <div>
        <Form update={this.updateViewHandler}/>

        {this.state.showPopup && <Popup 
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phone={this.state.phone}
        role={this.state.role}
        message={this.state.message}/>}

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
