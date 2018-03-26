import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

const Apptest = () => (
  <Router>
    <div>
    <ul>
      <li><Link to='/one'>one</Link></li>
      <li><Link to='/two'>two</Link></li>
      <li><Link to='/three'>three</Link></li>
      <li><Link to='/four'>four</Link></li>
    </ul>
    {/* Route就是路由配置，path是路径，component是对应路径的组件 */}
    <Route path='/:id' component={ Child } />
    </div>
  </Router>
)

const Child = ({match}) => (
  <React.Fragment>
    <h3>My id is {match.params.id}</h3>
  </React.Fragment>
)

export default Apptest;