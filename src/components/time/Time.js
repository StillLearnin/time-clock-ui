import React, { Component } from 'react';
import styles from './Time.css';

class Time extends Component {

  render() {
    return (
        <div className={styles.punchRow}>
            <div className={styles.punchIn}>
                {this.props.punch.in}
            </div>
            <div className={styles.punchOut}>
                {this.props.punch.out}
            </div>
        </div>
    );
  }
}

export default Time;