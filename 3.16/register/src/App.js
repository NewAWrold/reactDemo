import React from 'react';

import Resgister from './component/Resgister'

export default class App extends React.Component{

  getResgister(data){
    console.log(data);
  }
  render(){
    return(
      <div>
        <Resgister getResgister={this.getResgister.bind(this)}/>
      </div>
    )
  }
}