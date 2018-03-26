import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'


 const App = () =>(
  <Router>
    <div>
      <h2>账号</h2>
      <ul>
        <li><Link to='/1'>1</Link></li>
        <li><Link to='/2'>2</Link></li>
        <li><Link to='/3'>3</Link></li>
        <li><Link to='/4'>4</Link></li>
      </ul>      
      <Route path='/:id' component={Child} />
    </div>
  </Router>
)
const Child = ({match})=>(
  <React.Fragment>
    <h3>ID:this id is {match.params.id}</h3>
  </React.Fragment>
)

export default App;