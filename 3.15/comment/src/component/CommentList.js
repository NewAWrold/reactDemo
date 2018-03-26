import React from 'react'

export default class CommentList extends React.Component{
    render(){
        return(
        this.props.list.map((ele,ind)=>{
            return <li key={ind}>
                <p>评论人：{ele.name}</p>
                <p>评论内容：{ele.content}</p>
            </li>
        })
      )
    }
}