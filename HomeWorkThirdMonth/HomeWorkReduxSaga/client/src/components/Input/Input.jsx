import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ placeholder, onChangeInput, value, name, onBlurInput }) => {
    return (
        <input
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            onChange={onChangeInput}
            value={value}
            name={name}
            autoFocus
            onBlur={onBlurInput}
        />
    );
}
Input.propTypes = {
    placeholder: PropTypes.string,
    onChangeInput: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    onBlurInput: PropTypes.func,
};

export default Input;
