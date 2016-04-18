import React, { Component } from 'react';
import styles from './PunchPanel.css';

export default class PunchPanel extends Component {

  render() {

    return (
        <div className={styles.punchPanel}>
            <button type="button" className="btn btn-success btn-lg">Punch</button>
        </div>
    )
  }

}
