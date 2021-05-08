import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <Greet></Greet>  */}
        {/* <Welcome />  */}
        {/* <Hello name = 'Abin'>Hi I am Abin</Hello>
        <Hello name = 'Brad'><button>Submit</button></Hello>
        <Hello name = 'Wiky'><p>form</p></Hello>

        <Welcome name = 'Abin Thomas'></Welcome> */}
        <Message></Message>
      </div>
    );
  }
}

export default App;
