import React, { Component } from 'react';
import RowDay from '../row-day';
import styles from './index.css';

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
    return  <RowDay key={day.date} className={styles.day} day={day}/>;
  }

}

export default TimeLog;