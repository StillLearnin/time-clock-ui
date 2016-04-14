import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components/stories/row-day');
  require('../components/stories/time-log');
  require('../components/stories/time-editor');
  // require as many stories as you need.
}

configure(loadStories, module);