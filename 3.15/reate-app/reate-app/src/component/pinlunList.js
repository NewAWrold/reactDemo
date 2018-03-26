import React from 'react'
export default  class NumberList extends React.Component{
    render(){
        const List =[
            {'id':1,'name':'小明','content':'我是一只小小小小鸟'},
            {'id':2,'name':'小红','content':'一楼放学别走'},
            {'id':3,'name':'小刘','content':'放学打死'},
        ];
        return (
            <div>
                {
                    List.map((ele,index) => {
                        return <li key={index}>
                                    <p>评论人：{ele.name}</p>
                                    <p>评论内容：{ele.content}</p>
                                </li>
                    })
                }
            </div>
        )
    }
}


