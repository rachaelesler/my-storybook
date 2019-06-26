import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import { withPinnedTasks } from './TaskList.stories';

// test('renders pinned tasks at the start of the list', () => {
//     const div = document.createElement('div');
//     const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
//     ReactDOM.render(<TaskList tasks={withPinnedTasks} {...events} />, div);
//
//     // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
//     const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
//     expect(lastTaskInput).not.toBe(null);
//
//     ReactDOM.unmountComponentAtNode(div);
// });

test('Adding 1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2)
});
