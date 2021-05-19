import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component{
  render () {
    return (
      <div className = 'App'>
        <ErrorBoundary><Hero heroName = 'Superman'></Hero> </ErrorBoundary>
        <ErrorBoundary><Hero heroName = 'Batman'></Hero> </ErrorBoundary>
        <ErrorBoundary><Hero heroName = 'joker'></Hero></ErrorBoundary>
        {/* <PortalDemo></PortalDemo> */}
      </div>
    )
  }
}

export default App;
