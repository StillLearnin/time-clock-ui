import React from 'react';
import { Component } from 'react';
import TimeLog from '../time-log/TimeLog';
import PunchPanel from '../punch-panel/PunchPanel'

export default class Home extends Component {

  render() {
    return (
      <div >
        <PunchPanel />
        <TimeLog {...this.props} />
      </div>
    );
  }

}
