// Created by Rachael Esler 24/06/19

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, color, text, boolean, number } from '@storybook/addon-knobs';

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

const stories = storiesOf('MaterialCheckbox', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('checked', () => <MaterialCheckbox checkbox={checkbox}  {...actions} />)
    .add('unchecked', () => <MaterialCheckbox checkbox={{ ...checkbox, status: 'UNCHECKED' }} {...actions} />);

// Knobs
stories.addDecorator(withKnobs);

// stories.add('with a button', () => (
//     <button disabled={boolean('Disabled', false)} >
//         {text('Label', 'Hello Storybook')}
//     </button>
// ));
//
// // Knobs as dynamic variables.
// stories.add('as dynamic variables', () => {
//     const name = text('Name', 'Arunoda Susiripala');
//     const age = number('Age', 89);
//
//     const content = `I am ${name} and I'm ${age} years old.`;
//     return (<div>{content}</div>);
// });

