/**
 * Created by Cassie.Xu on 17/7/12.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component{
  render(){
    return <div className="content">
      <Link key={0} to="/TimerBar">计时器</Link>
    </div>
  }
}

export default Home
