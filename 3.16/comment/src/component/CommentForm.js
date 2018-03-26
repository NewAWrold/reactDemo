import React from 'react';

export default class CommentForm extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            name:'',
            content:''
        }
    }
    handleName(e){
        this.setState({name:e.target.value})
    }
    handleContent(e){
        this.setState({content:e.target.value})
    }
    handlePush(){
        // console.log(this.state);
        this.props.getInfo(this.state);
    }

    render(){
        return(
            <React.Fragment>
                <div>
                姓名:<input type='text' onChange={this.handleName.bind(this)} value={this.state.name} />
                </div>
                <div>
                评论内容:<br/><textarea onChange={this.handleContent.bind(this)} cols='60' rows='5' value={this.state.content} />
                </div>
                <button onClick={this.handlePush.bind(this)} >评论</button>
            </React.Fragment>
        )
    }
}