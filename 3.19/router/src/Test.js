import React from 'react'
import { BrowserRouter as Router,Route,Link,Redirect } from 'react-router-dom'

export default class Select extends React.Component{
    render(){
        return(
          <Router>
            <React.Fragment>
               <p><Link to='/index'>去首页</Link></p>
               <p><Link to='/comment'>去评论页</Link></p>
               <Route path='/Index' component={Index} />
               <Route path='/comment' component={Comment} />
               <Redirect form='/' to='/Index' />
            </React.Fragment>
          </Router>
        )
    }
}



class Comment extends React.Component{
    render(){
        return(
            <div>
                <h1>评论区：</h1>
                <ul>
                    <li><link to='/陈独秀'>我是陈独秀，我最秀</link></li>
                    <li><link to='/李大钊'>我是李大钊，我要发言</link></li>
                    <li><link to='/朱自清'>我是朱自清，你看见我的橘子了吗</link></li>
                    <li><link to='/aa'>我是aa,不亏是蒂花之秀</link></li>
                </ul>
                <Route path='/:id' component={ Child } />
            </div>
        )
    }
}

const Child = ({match}) => (
    <div>
        <h4>{match.parmas.id}</h4>
    </div>
)

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>首页：</h1>
                <ul>
                    <li>是人性的扭曲</li>
                    <li>还是道德的沦丧</li>
                    <li>请看下集</li>
                    <li>橘子失踪之谜</li>
                </ul>
            </div>
        )
    }
}