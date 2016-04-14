import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimeLog from './components/time-log';

var daysData = [
{
    date: "Tuesday April 12, 2016",
    total: {
        hours: 5,
        minutes: 15
    },
    punches: [
        { id: "asdfdf", in: "4:47", out: "8:30" },
        { id: "afasdf", in: "8:47", out: "9:30" },
        { id: "asdfaf", in: "10:00", out: "10:40" },
        { id: "asdfas", in: "10:47", out: null }
    ]
},
{
    date: "Wednesday April 13, 2016",
    total: {
        hours: 5,
        minutes: 15
    },
    punches: [
        { id: "asdfd", in: "8:30", out: "12:30" },
        { id: "sdfas", in: "1:00", out: "5:30" }
    ]
}];

var App = React.createClass ( {
    render() {
        return (
        <div>
            <div class="clock">
            </div>
            <div class="days">
                <TimeLog days={daysData}/>
            </div>
        </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('appBody'));