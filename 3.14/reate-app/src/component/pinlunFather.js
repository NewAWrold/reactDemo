import React from 'react';

import PinlunList from './pinlunList.js'

export default class PinlunFather extends React.Component{
        constructor(props){
        super(props)

        this.state = {
            'List' :[
                {'id':1,'name':'小明','content':'我是一只小小小小鸟'},
                {'id':2,'name':'小红','content':'一楼放学别走'},
                {'id':3,'name':'小刘','content':'放学打死'},
            ]
        }
    }
    render(){
        return (
            <React.Fragment>
            <h1>评论列表：</h1>
            <PinlunList List = {this.state.List}/>
            </React.Fragment>
        )
    }
} 
