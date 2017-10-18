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
        return (
            <div className="content">
                <Link to="/timerBar">计时器</Link><br />
                <Link to="/cuteCube">方块</Link>
                <Link to="/begin">d3 Chart</Link>
            </div>
        );
    }
}

export default Home
