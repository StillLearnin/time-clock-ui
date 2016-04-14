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
        <div className={styles.day}>{day.total.hours} Hrs. {day.total.minutes} Min.</div>
    </td>;
  },

  getTimeDetail() {
    if (this.state.day.isExpanded == false)
        return <td className={styles.punches} onClick={this.toggleCollapsed}/>;

    return <td className={styles.punches}>
    {this.props.day.punches.map(this.getRowTime)}</td>;
  },

  getRowTime(punch) {
      return <RowTime key={punch.id} punch={punch}/>
  },

  toggleCollapsed() {
      var newDay = this.state.day;
      newDay.isExpanded = !newDay.isExpanded;
      this.setState({ day: newDay  });
  }
});

export default RowDay;