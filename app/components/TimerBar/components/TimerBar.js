/**
 * Created by Cassie.Xu on 17/7/6.
 */
//Greeter,js
import React, {Component} from 'react';
import styles from './TimerBar.css';//导入

const startDate = new Date();
const oneSec = 1000;
const oneMin = oneSec * 60;
const oneHour = oneMin * 60;
const oneDay = oneHour * 24;

class TimerBar extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      timeParts: []
    };
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick = () => {
    let now = new Date();
    let elapsed = (now - startDate) % oneDay;
    let parts = [];

    parts[0] = Math.floor(elapsed / oneHour).toString();
    parts[1] = Math.floor((elapsed % oneHour) / oneMin).toString();
    parts[2] = Math.floor((elapsed % oneMin) / oneSec).toString();

    parts[0] = parts[0].length > 1 ? parts[0] : `0${parts[0]}`;
    parts[1] = parts[1].length > 1 ? parts[1] : `0${parts[1]}`;
    parts[2] = parts[2].length > 1 ? parts[2] : `0${parts[2]}`;
    this.setState({
      timeParts: parts.join(':')
    })
  };

  render(){
    let { timeParts } = this.state;

    return (
      <div className={styles.container}>
        <div className={`${styles.timer} ${styles.hours}`}></div>
        <div className={`${styles.timer} ${styles.minutes}`}></div>
        <div className={`${styles.timer} ${styles.seconds}`}></div>
        <div className={styles.face}>
          <h2>Timer</h2>
          <p>{timeParts}</p>
        </div>
      </div>
    );
  }
}

export default TimerBar
