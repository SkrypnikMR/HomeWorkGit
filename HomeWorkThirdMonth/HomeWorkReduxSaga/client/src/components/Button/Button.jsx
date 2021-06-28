import React, { Component } from 'react';
import './Button.scss';
import propTypes from 'prop-types';

class Button extends Component {
    render() {
        const { onButtonClick, title, clsNm, disabled } = this.props;
        return <button disabled={disabled} onClick={onButtonClick} className={clsNm || 'custom__button'}>{title}</button>;
    }
}
Button.propTypes = {
    onButtonClick: propTypes.func.isRequired,
    title: propTypes.string,
    clsNm: propTypes.string,
    disabled: propTypes.bool,
};
export default Button;
