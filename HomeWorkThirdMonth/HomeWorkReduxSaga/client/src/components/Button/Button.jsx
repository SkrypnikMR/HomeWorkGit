import React, { Component } from 'react';
import './Button.scss';
import propTypes from 'prop-types';

const Button = ({ onButtonClick, title, clsNm, disabled }) => (
    <button
        disabled={disabled}
        onClick={onButtonClick}
        className={clsNm || 'custom__button'}>
        {title}
    </button>
);
Button.propTypes = {
    onButtonClick: propTypes.func.isRequired,
    title: propTypes.string,
    clsNm: propTypes.string,
    disabled: propTypes.bool,
};
export default Button;
