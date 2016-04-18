import React from 'react';
import { Component } from 'react';
import TimeLog from '../time-log/TimeLog';

export default class Home extends Component {

  render() {
    return (
      <div >
        <h1>
          Home
        </h1>
        <TimeLog {...this.props} />
      </div>
    );
  }

}
