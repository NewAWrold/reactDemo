import React from 'react';
import PinlunList from './pinlunList.js'

export default class PinlunFather extends React.Component{
    render(){
        return (
           <div>
                <h1>评论列表：</h1>
                <PinlunList/>
           </div>
        )
    }
} 
