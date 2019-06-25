// Created by Rachael Esler 25/06/19

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MaterialAppBar from './MaterialAppBar';

export const appbar = {};

export const actions = {};

storiesOf('MaterialAppBar', module)
    .add('default', () => <MaterialAppBar appbar={appbar} {...actions} />);


