/**
 * Created by Cassie.Xu on 17/7/12.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      // timeParts: []
    };
  }
  render(){
    console.log('--------');

    return (
      <div className="content">
        <Link to="/timerBar">计时器</Link><br />
        <Link to="/cuteCube">方块</Link>
      </div>
    );
  }
}

// const Home = () => {
//   return <TimerBar />
// }

export default Home
