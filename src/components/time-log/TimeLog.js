import React, { Component } from 'react';
import Day from '../day/Day';
import css from './TimeLog.css';
import appcss from '../App.css';

export default class TimeLog extends Component {

  componentWillMount() {
    this.props.fetch();
  }

  render() {

    const { days, daysFetching, punching, toggleCollapsed } = this.props;
    if (!punching || !days) {
      if (daysFetching) {
        return (
          <div className={css.timeLogPanel}>
            <div className={appcss.alertInfo}>
              Loading...
            </div>
          </div>
        );
      }

      if (!days || days.length<1) {
        return (
          <div className={css.timeLogPanel}>
            <div className={appcss.alertInfo}>
              <p><span className={appcss.textBold}>No punches found.</span> Feel free to punch in if you're ready to start working.</p>
            </div>
          </div>
        );
      }
    }

    return (
      <div className={css.timeLogPanel}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Time Log</th>
            </tr>
          </thead>
          <tfoot>
          </tfoot>
          <tbody>
            {days.map(function(day, i) {
              return (
                <Day toggleCollapsed={toggleCollapsed} key={day.date} className={css.day} day={day}/>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
