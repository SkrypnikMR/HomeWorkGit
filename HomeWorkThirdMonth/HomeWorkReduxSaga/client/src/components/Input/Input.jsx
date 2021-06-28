import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
    render() {
        const { placeholder, onChangeInput, value, name, onBlurInput } = this.props;
        return (
            <input
                type="text"
                autoComplete="off"
                placeholder={placeholder}
                onChange={onChangeInput}
                value={value}
                name={name}
                onBlur={onBlurInput}
            />
        );
    }
}
Input.propTypes = {
    placeholder: PropTypes.string,
    onChangeInput: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    onBlurInput: PropTypes.func,
};

export default Input;
