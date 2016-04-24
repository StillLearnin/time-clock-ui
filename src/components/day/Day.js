import React, { Component } from 'react';
import Time from '../time/Time';
import css from './Day.css';

var Day = React.createClass ({

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
                className={css.day}>
        <div className={css.day}>{day.date}</div>
        { this.getTotalTime(true) }
    </td>;
  },

  getTimeDetail() {
    if (this.props.day.isExpanded == false)
        return <td className={css.punches} onClick={this.toggleCollapsed}>
            {this.getTotalTime(false)}
        </td>;

    return <td className={css.punches}>
    {this.props.day.punches.map(this.getTime)}</td>;
  },

  getTime(punch) {
      return <Time key={punch.id} punch={punch}/>
  },

  getTotalTime(showExpanded) {
      var day = this.props.day;
        if (day.isExpanded == showExpanded)
            return <div className={css.day}>{day.total.hours} Hrs. {day.total.minutes} Min.</div>;
        else
            return null;
  },

  toggleCollapsed() {
      this.props.toggleCollapsed(this.props.day.key);
  }
});

export default Day;