// Created by Rachael Esler 25/06/19

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import MaterialAppBar from './MaterialAppBar';

export const appbar = {};
export const actions = {};

const stories = storiesOf('MaterialAppBar', module)
    .add('default', () => <MaterialAppBar appbar={appbar} {...actions} />);

stories.addDecorator(withKnobs);




