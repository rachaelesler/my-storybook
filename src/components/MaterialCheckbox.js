// Created by Rachael Esler 24/06/19

import React from 'react';
import PropTypes from 'prop-types';
import { withKnobs, color, text, boolean, number } from '@storybook/addon-knobs';

import Checkbox from '@material-ui/core/Checkbox';

export default function MaterialCheckbox({checkbox: {id, status}, onCheck, onUncheck}) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
    });

    return (
        <div className={`list-item ${status}`}>
            <label className="checkbox">
                <Checkbox
                    color={'primary'}
                    checked={status === 'CHECKED'}
                    inputProps={{'aria-label': 'primary checkbox',}}
                    disabled={boolean('Disabled', false)}
                />
            </label>
        </div>
    );
}

MaterialCheckbox.propTypes = {
    checkbox: PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }),
    onTick: PropTypes.func,
    onPinTask: PropTypes.func,
};