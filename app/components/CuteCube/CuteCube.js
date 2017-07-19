/**
 * Created by Cassie.Xu on 17/7/17.
 */
import React, { Component } from 'react';
import styles from './cuteCube.css';

class CuteCube extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      rotateDegree: 0
    };
  }

  render() {
   return (
     <div className={styles.father}>
       <div className={styles.container}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
       </div>
     </div>
   )

  }
}

export default CuteCube;
