import React from 'react'

export default class NumberList extends React.Component{
    constructor(props){
        super(props)

    //     this.state = {
    //         'List' :[
    //             {'id':1,'name':'小明','content':'我是一只小小小小鸟'},
    //             {'id':2,'name':'小红','content':'一楼放学别走'},
    //             {'id':3,'name':'小刘','content':'放学打死'},
    //         ]
    //     }
    }
    render(){
    {/*const List =[
            {'id':1,'name':'小明','content':'我是一只小小小小鸟'},
            {'id':2,'name':'小红','content':'一楼放学别走'},
            {'id':3,'name':'小刘','content':'放学打死'},
        ];*/}
    const commitList = this.props.List.map(ele=>{
        return <li key={ele.id}>
            <p>评论人：{ele.name}</p>
            <p>评论内容：{ele.content}</p>
        </li>
    });
    return (
        <ul>{commitList}</ul>
    )
    {/* return (
        <ul>
            {
                List.map(ele=>{
                    return <li key={ele.id}>
                        <p>评论人：{ele.name}</p>
                        <p>评论内容：{ele.content}</p>
                    </li>
                })
            }
        </ul>
    )*/}
}
}
