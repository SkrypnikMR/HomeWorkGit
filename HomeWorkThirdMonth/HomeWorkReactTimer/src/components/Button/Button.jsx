import React, { Component } from 'react'
import './Button.scss';
class Button extends Component {
    render() {
        const { onButtonClick, title, disabled } = this.props;
        return <button onClick={onButtonClick} disabled={disabled}>{title}</button>;
    }
}

export default Button;