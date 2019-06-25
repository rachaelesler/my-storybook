// Created by Rachael Esler 24/06/19

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';

export default function MaterialCheckbox({checkbox: {id, status}, onCheck, onUncheck, onDisable}) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
        checkedC: true,
    });
    
    return (
        <div className={`list-item ${status}`}>
            <label className="checkbox">
                <Checkbox
                    color={'primary'}
                    checked={status === 'CHECKED'}
                    inputProps={{'aria-label': 'primary checkbox',}}
                    disabled={status === 'DISABLED'}
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