import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Editor from '../time-editor'
var punch = { id: "asdfdf", in: "04:47", out: "08:30" };

storiesOf('Time Editor', module)
  .add('Time Punch', () => (
    <Editor punch={punch} />
  ));