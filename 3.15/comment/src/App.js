import React from 'react';

import CommentBox from './component/CommentBox.js';
import CommentSend from './component/CommentSend.js';


export default class App extends React.Component{
  constructor(props){
      super(props)

      this.state = {
        list :[
            {name:'小明',content:'哈哈，我坐上了沙发'},
            {name:'小红',content:'特么得，放学留下'},
            {name:'小李',content:'放学别走！'}
        ]
    }
      // this.handleData = this.handleData.bind(this);
  }

  handleData(name,content){
    console.log(name,content)
    this.state.list.unshift({name:name,content:content});
    this.setState({list:this.state.list});
  }
  render() {
    return (
      <div className="App">
        <CommentSend  list={this.state.list} handleData={this.handleData.bind(this)}/>
        <CommentBox list={this.state.list} />
      </div>
    );
  }
}
