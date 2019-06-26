// .storybook/config.js

import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/index.css';

// Addons
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-backgrounds/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-notes/register';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo); 
addDecorator(withA11y);
addParameters({
	// Dark theme
	options: {
    theme: themes.dark,
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);