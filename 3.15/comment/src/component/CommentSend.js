import React from 'react';

export default class CommentSend extends React.Component{
    constructor(props){
        super(props)

         this.state = {name:'',content:''}
        this.textName = this.textName.bind(this);
        this.areaContent = this.areaContent.bind(this);

    }

    
    textName(e){
        this.setState({name:e.target.value})
    }
    areaContent(e){
        this.setState({content:e.target.value})
    }
    handleDatas(){
        this.props.handleData(this.state.name,this.state.content);
    }
    render(){
        return(
            <div>
            姓名: <input type='text' onChange={this.textName} value={this.state.name} /><br/>
            评论内容:<br/><textarea cols='30' rows='5' onChange={this.areaContent} value={this.state.content} />
            <br />
            <button onClick={this.handleDatas.bind(this)}>发表评论</button>
            </div>
        )
    }

}