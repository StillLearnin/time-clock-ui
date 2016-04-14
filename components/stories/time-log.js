import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TimeLog from '../time-log'
var daysData = [
{
    date: "Monday April 11, 2016",
    isExpanded: false,
    total: {
        hours: 1,
        minutes: 0
    },
    punches: [
        { id: "asdfdf", in: "4:47", out: "8:30" },
        { id: "afasdf", in: "8:47", out: "9:30" }
    ]
},
{
    date: "Tuesday April 12, 2016",
    isExpanded: false,
    total: {
        hours: 5,
        minutes: 15
    },
    punches: [
        { id: "asdfdf", in: "4:47", out: "8:30" },
        { id: "afasdf", in: "8:47", out: "9:30" },
        { id: "asdfaf", in: "10:00", out: "10:40" },
        { id: "asdfas", in: "10:47", out: "12:50" }
    ]
},
{
    date: "Wednesday April 13, 2016",
    isExpanded: true,
    total: {
        hours: 5,
        minutes: 0
    },
    punches: [
        { id: "asdfd", in: "8:30", out: "12:30" },
        { id: "sdfas", in: "1:00", out: "-" }
    ]
}];

storiesOf('TimeLog', module)
  .add('Week', () => (
    <TimeLog days={daysData} />
  ));