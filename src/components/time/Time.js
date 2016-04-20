import React, { Component } from 'react';
import css from './Time.css';

class Time extends Component {

  render() {
    return (
        <div className={css.punchRow}>
            <div className={css.punchIn}>
                {this.props.punch.in}
            </div>
            <div className={css.punchOut}>
                {this.props.punch.out}
            </div>
        </div>
    );
  }
}

export default Time;