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
    event.preventDefault(); // preventDefault is called on the event when SUBMITTING the form to prevent a browser reload
  }

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      role: this.state.role,
      message: this.state.message
    }
    return (
      <div>
        <Form update={this.updateViewHandler} submit={this.showPopupHandler}/>

        {this.state.showPopup && <Popup {...props}/>}

        <View {...props}/>
      </div>
    );
  }
}

export default App;
