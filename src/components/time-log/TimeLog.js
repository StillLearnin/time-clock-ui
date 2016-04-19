import React, { Component } from 'react';
import Day from '../day/Day';
import styles from './TimeLog.css';

export default class TimeLog extends Component {

  componentWillMount() {
    this.props.fetch();
  }

  render() {

    const { items, itemsFetching } = this.props;

    if (itemsFetching) {
      return (
        <div className="alert alert-warning" role="alert">
          Loading...
        </div>
      );
    }

    if (!items || items.length<1) {
      return (
        <div className="alert alert-info" role="alert">
          No punches found, please add one.
        </div>
      );
    }

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
                {items.map(this.getDayRow)}
            </tbody>
        </table>
    )
  }

  getDayRow(day, index) {
    return  <Day key={day.date} className={styles.day} day={day}/>;
  }

}
