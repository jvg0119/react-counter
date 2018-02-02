import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*  commenting inside JSX
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <h1 className="App-title">Welcome to React</h1>
      // </header>
      // <p className="App-intro">
      //   To get started, edit <code>src/App.js</code> and save to reload.
      // </p>
      */}
      <ul>
        <ToDo />
        <ToDo />
      </ul>
      </div>
    );
  }
}

export default App;
//export default ToDo;
