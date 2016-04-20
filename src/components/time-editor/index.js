import React, { Component } from 'react';
import css from './index.css';

var TimeEditor = React.createClass ({

  render() {
    return (
        <div className={css.wrapper}>
            <div className={css.timeEditor}>
                <button>Delete</button>
                <input id="timeIn" type="time" value={this.props.punch.in}/>
                <input id="timeOut" type="time" value={this.props.punch.out}/>
                <button>OK</button>
                <button>Cancel</button>
            </div>
        </div>
    )
  }
});

export default TimeEditor;