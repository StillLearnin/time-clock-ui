import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import RowDay from '../row-day'
var dayData = {
    date: "2016-04-12",
    total: {
        hours: 5,
        minutes: 15
    },
    punches: [
        { id: "asdfdf", in: "4:47", out: "8:30" },
        { id: "afasdf", in: "8:47", out: "9:30" },
        { id: "asdfaf", in: "10:00", out: "10:40" },
        { id: "asdfas", in: "10:47", out: "12:30" }
    ]
};

storiesOf('RowDay', module)
  .add('Collapsed', () => (
    <RowDay day={dayData} collapsed='true'/>
  ))
  .add('Expanded', () => (
    <RowDay day={dayData} collapsed='false'/>
  ));