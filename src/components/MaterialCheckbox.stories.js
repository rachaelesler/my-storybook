// Created by Rachael Esler 24/06/19

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MaterialCheckbox from './MaterialCheckbox';

export const checkbox = {
    id: '1',
    status: 'CHECKED'
};

export const actions = {
    onCheck: action('onCheck'),
    onUncheck: action('onUncheck'),
    onDisable: action('onDisable')
};

storiesOf('MaterialCheckbox', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('checked', () => <MaterialCheckbox checkbox={checkbox} {...actions} />)
    .add('unchecked', () => <MaterialCheckbox checkbox={{ ...checkbox, status: 'UNCHECKED' }} {...actions} />)
    .add('disabled', () => <MaterialCheckbox checkbox={{ ...checkbox, status: 'DISABLED' }} {...actions} />);
