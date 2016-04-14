import React, { Component } from 'react';
import RowTime from '../row-time';
import styles from './index.css';

var RowDay = React.createClass ({
  getInitialState() {
    return { day: this.props.day };
  },

  render() {
    return (
        <tr>
            {this.getDayDetail()}
            {this.getTimeDetail()}
        </tr>
    )
  },

  getDayDetail() {
      var day = this.props.day;
    return <td onClick={this.toggleCollapsed}
                className={styles.day}>
        <div className={styles.day}>{day.date}</div>
        { this.getTotalTime(true) }
    </td>;
  },

  getTimeDetail() {
    if (this.state.day.isExpanded == false)
        return <td className={styles.punches} onClick={this.toggleCollapsed}>
            {this.getTotalTime(false)}
        </td>;

    return <td className={styles.punches}>
    {this.props.day.punches.map(this.getRowTime)}</td>;
  },

  getRowTime(punch) {
      return <RowTime key={punch.id} punch={punch}/>
  },

  getTotalTime(showExpanded) {
      var day = this.props.day;
        if (day.isExpanded == showExpanded)
            return <div className={styles.day}>{day.total.hours} Hrs. {day.total.minutes} Min.</div>;
        else
            return null;
  },

  toggleCollapsed() {
      var newDay = this.state.day;
      newDay.isExpanded = !newDay.isExpanded;
      this.setState({ day: newDay  });
  }
});

export default RowDay;