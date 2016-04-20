import React from 'react';
import { Component } from 'react';
import TimeLog from '../time-log/TimeLog';
import PunchPanel from '../punch-panel/PunchPanel'
import styles from './Home.css'

export default class Home extends Component {

  render() {
    return (
      <div className={styles.homeBody}>
        <div className={styles.containerLeft}>
          <PunchPanel {...this.props} />
        </div>
        <div className={styles.containerRight}>
          <TimeLog {...this.props} />
        </div>
      </div>
    );
  }

}
