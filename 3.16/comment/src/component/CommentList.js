import React from 'react';


export default class CommentList extends React.Component{
    render(){
        return(
            <ul>{
            this.props.list.map((ele,ind)=> {
                return <li key={ind}>
                    <p>{ele.name}</p>
                    <h3>{ele.content}</h3>
                </li>
            })
                }
            </ul>
        )
    }
}