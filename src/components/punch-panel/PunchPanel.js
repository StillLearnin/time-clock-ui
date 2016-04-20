import React, { Component } from 'react';
import css from './PunchPanel.css';
import moment from 'moment';

export default class PunchPanel extends Component {

  componentDidMount() {
      this.timer = setInterval(this.digclock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    var s = true;
    var bt = s ? css.punchIn : css.punchOut;
    var btText = s ? "Punch In" : "Punch Out";
    return (
      <div className={css.punchPanelWrapper}>
        <div className={css.clockPanel}>
          <div id="date" className={css.date}>Loading</div>
          <div id="clock" className={css.clock}>...</div>
        </div>
        <div className={css.buttonPanel}>
          <button type="button" className={bt}
                onClick={() => this.punch()}>{btText}</button>
        </div>
      </div>
    )
  }

  punch() {
    var punch = {
        id: "asdfdf",
        in : "4:47",
        out: "8:30"
      };
    this.props.savePunch(punch);
  }

  digclock() {
    var d = moment().format("dddd, MMMM D, YYYY");
    document.getElementById("date").innerHTML = d;
    var t = moment().format("h:MM:ss A");
    document.getElementById("clock").innerHTML = t;
  }
}
