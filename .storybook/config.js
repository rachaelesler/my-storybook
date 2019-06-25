// .storybook/config.js

import { configure } from '@storybook/react';
import '../src/index.css';

// Addons
import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-a11y';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);