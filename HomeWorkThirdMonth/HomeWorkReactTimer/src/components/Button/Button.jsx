import React, { Component } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const { onButtonClick, title, disabled } = this.props;
        return <button onClick={onButtonClick} disabled={disabled}>{title}</button>;
    }
}
Button.propTypes = {
    onButtonClick: PropTypes.func,
    title: PropTypes.any,
    disabled: PropTypes.bool,
};

export default Button;
