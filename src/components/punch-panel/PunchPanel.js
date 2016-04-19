import React, { Component } from 'react';
import styles from './PunchPanel.css';

export default class PunchPanel extends Component {

  componentDidMount() {
      this.timer = setInterval(this.digclock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    var s = true;
    var bt = s ? styles.punchIn : styles.punchOut;
    var btText = s ? "Punch In" : "Punch Out";
    return (
      <div className={styles.punchPanelWrapper}>
        <div className={styles.punchPanel}>
            <div id="clock" className={styles.clock}>
              Loading...
            </div>
            <button type="button" className={bt}>{btText}</button>
        </div>
      </div>
    )
  }

  digclock() {
    var d = new Date()
    var t = d.toLocaleTimeString()

    document.getElementById("clock").innerHTML = t
  }
}
