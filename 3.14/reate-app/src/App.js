import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Commit from './component/commit.js'

class App extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
      <h1>评论组件：</h1>
      <Commit/>
      </div>
    );
  }
}

export default App;
