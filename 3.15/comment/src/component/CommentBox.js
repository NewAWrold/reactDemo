import React from 'react'
import CommentList from './CommentList.js'

export default class CommentBox extends React.Component{
    render(){
        return(
            <React.Fragment>
            <h1>评论列表:</h1>
            <ul>
            <CommentList list={this.props.list} />
            </ul>
            </React.Fragment>
        )
    }
}