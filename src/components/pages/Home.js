import React from 'react';
import { Component } from 'react';
import TimeLog from '../time-log/TimeLog';
import PunchPanel from '../punch-panel/PunchPanel'
import css from './Home.css'

export default class Home extends Component {

  render() {
    return (
      <div className={css.homeBody}>
        <div className={css.containerLeft}>
          <PunchPanel {...this.props} />
        </div>
        <div className={css.containerRight}>
          <TimeLog {...this.props} />
        </div>
      </div>
    );
  }

}
