import React from 'react';

import CommentList from './component/CommentList.js'
import CommentForm from './component/CommentForm.js'

export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        list:[
          {name:'陈独秀',content:'我老奶奶都不扶就服你'},
          {name:'朱自清',content:'老陈你见到我的橘子了吗？'},
          {name:'李大钊',content:'我看见一地的橘子皮，就是陈独秀吃的'}
        ]
      }
    }

  getInfo(data){
    // console.log(data);
    this.state.list.unshift({name:data.name,content:data.content});
    // console.log(this.state);
    this.setState({list:this.state.list});
  }
  render(){
    return(
      <React.Fragment>
        <CommentForm getInfo={this.getInfo.bind(this)} />
        <div>
          <h1>评论内容:</h1>
        </div>
        <CommentList list={this.state.list} />
      </React.Fragment>
    )
  }
}