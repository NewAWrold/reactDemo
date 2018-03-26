import React,{Component} from 'react';

export default class Commit extends React.Component{
    constructor(props){
        super(props)

        this.state = {'info':
            [
                {'id':1,'name':'小明','content':'我是一只小小小小鸟'},
                {'id':2,'name':'小红','content':'一楼放学别走'},
                {'id':3,'name':'小刘','content':'放学打死'},
            ]
        },
        this.all = this.all.bind(this);
    }
    all(){
         const info =this.state.info.map(function(v){
            <li key={v.id}>
                <p>评论人:{v.name}</p>
                <p>内容:{v.content}</p>
            </li>
        })
    }

    render(){
        return(
            <ul>
                {this.all()}
            </ul>
        )
    }
}