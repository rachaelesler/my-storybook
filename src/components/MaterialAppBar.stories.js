// Created by Rachael Esler 25/06/19

import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withDesign} from 'storybook-addon-designs';


import MaterialAppBar from './MaterialAppBar';

export const appBar = {};
export const actions = {};

const stories = storiesOf('MaterialAppBar', module)
    .addDecorator(withDesign)
    .add('default', () =>
            <MaterialAppBar appbar={appBar} {...actions} />,
        {
            design: {
                type: 'figma',
                url: 'https://www.figma.com/file/UyueMdbhllVsXg5yedyKFv/Google-Material-Design?node-id=0%3A1047'
            }
        }
    )
;

stories.addDecorator(withKnobs);




