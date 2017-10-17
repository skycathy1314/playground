/**
 * Created by Cassie.Xu on 17/7/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import TimerBar from './components/TimerBar/TimerBar';
import CuteCube from './components/CuteCube/CuteCube';
import Begin from './components/D3/Begin/Begin';


ReactDOM.render(
  <Router>
    <div>
      {/*<ul>*/}
        {/*<li><Link to="/">Home</Link></li>*/}
        {/*<li><Link to="/timerBar">TimerBar</Link></li>*/}
        {/*<li><Link to="/topics">Topics</Link></li>*/}
      {/*</ul>*/}
      <hr />
      <Route exact path="/" component={() => { return <Home /> }} />
      <Route path="/timerBar" component={() => { return <TimerBar /> }} />
      <Route path="/cuteCube" component={() => { return <CuteCube /> }} />
      <Route path="/d3/begin" component={() => { return <Begin /> }} />
    </div>
  </Router>
, document.getElementById('root'));
