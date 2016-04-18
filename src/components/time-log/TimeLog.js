import React, { Component } from 'react';
import Day from '../day/Day';
import styles from './TimeLog.css';

class TimeLog extends Component {

  render() {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Time Log</th>
                </tr>
            </thead>
            <tfoot>
            </tfoot>
            <tbody>
                {this.props.days.map(this.getDayRow)}
            </tbody>
        </table>
    )
  }

  getDayRow(day, index) {
    return  <Day key={day.date} className={styles.day} day={day}/>;
  }

}

export default TimeLog;