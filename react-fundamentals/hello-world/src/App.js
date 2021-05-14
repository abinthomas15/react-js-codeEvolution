import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'

class App extends Component {
  render () {
    return (
      <div className="App">
        <StyleSheet primary = {true}></StyleSheet>
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter></Counter> */}
        {/* <Greet></Greet>  */}
        {/* <Welcome />  */}
        {/* <Hello name = 'Abin'>Hi I am Abin</Hello>
        <Hello name = 'Brad'><button>Submit</button></Hello>
        <Hello name = 'Wiky'><p>form</p></Hello>

        <Welcome name = 'Abin Thomas'></Welcome> */}
        {/* <Message name = "Abin"></Message>  */}
      </div>
    );
  }
}

export default App;
