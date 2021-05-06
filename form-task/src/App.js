import './App.css';
import React, { Component } from 'react';
import Form from './Form';
import View from './View';
import Popup from './Popup';
import NotesList from './NotesList';

class App extends Component {
  state = {
    inputData: {
      firstname : "",
      lastname : "",
      phone : "",
      role : "Student",
      message : ""
    },
    showPopup : false,
    notes: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/notes").then(res => res.json()).then(data => this.setState({notes: data}));
  }

  updateViewHandler = (event) => {
    this.setState({
      inputData: {...this.state.inputData, [event.target.name] : event.target.value}
    });
  }

  showPopupHandler = (event) => {
    this.setState({
      showPopup: true
    });
    event.preventDefault(); // preventDefault is called on the event when SUBMITTING the form to prevent a browser reload
  }

  postDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(this.state.inputData)
    };
    fetch('http://localhost:3001/notes', requestOptions);
    alert("Note is posted!", window.location.reload());
  }

  render() {
    return (
      <div>
        <Form update={this.updateViewHandler} submit={this.showPopupHandler}/>

        {this.state.showPopup && <Popup {...this.state.inputData} submit={this.postDataHandler}/>}

        <View {...this.state.inputData}/>

        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
