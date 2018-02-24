import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>i think you can, you are best!</h2>
        </header>
        <p className="App-intro" id='myson'>
        <script type='text/babel' src='hello.js'></script>  
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          you can revise at <code>src/App.js</code>
        </p>
      </div>
    );
  }
}

export default App;
