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
import Inline from './components/Inline'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
import LifeCycle from './components/Lifecycle'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'

class App extends Component {
  render () {
    return (
      <div className="App">
        <FRParentInput></FRParentInput>
        {/* <FocusInput></FocusInput> */}
        {/* <RefsDemo></RefsDemo> */}
        {/* <Table></Table> */}
        {/* <FragmentDemo></FragmentDemo> */}
        {/* <LifeCycle></LifeCycle> */}
        {/* <Form></Form> */}
        {/* <h1 className = 'error' >Error</h1>  */}
        {/* <h1 className = {styles.success}>Success</h1> */}
        {/* <Inline></Inline> */}
        {/* <StyleSheet primary = {true}></StyleSheet> */}
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
