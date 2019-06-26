// src/components/Task.stories.js

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, object} from '@storybook/addon-knobs/react';
import {withA11y} from '@storybook/addon-a11y';

import Task from './Task';

export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
    .add('default', () => {
        return <Task task={object('task', {...task})} {...actions} />;
    })
    .add('pinned', () => <Task task={{...task, state: 'TASK_PINNED'}} {...actions} />)
    .add('archived', () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />);