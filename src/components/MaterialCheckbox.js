// Created by Rachael Esler 24/06/19

import React from 'react';
import PropTypes from 'prop-types';
import {withKnobs, color, text, boolean, number} from '@storybook/addon-knobs';

import Checkbox from '@material-ui/core/Checkbox';

export default class MaterialCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
    }

    // handleChange() {
    //     console.log('HERE');
    //     if(this.state.checked === true) {
    //         this.setState({checked: false});
    //     }
    //     else {
    //         this.setState({checked: true});
    //     }
    //     return;
    // };

    render() {
        return (
            <div className={`list-item ${this.state.checked}`}>
                <label className="checkbox">
                    <Checkbox
                        id="checkbox"
                        color={'primary'}
                        value="CheckedA"
                        checked={this.state.checked === true}
                        inputProps={{'aria-label': 'primary checkbox',}}
                        disabled={boolean('Disabled', false)}
                        // onChange={this.handleChange()}
                    />
                </label>
            </div>
        );
    }
}

MaterialCheckbox.propTypes = {
    checkbox: PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }),
    onTick: PropTypes.func,
    onPinTask: PropTypes.func,
};