import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
    render() {
        const { placeholder, onChangeInput, value } = this.props;
        return <input type="text" placeholder={placeholder} onChange={onChangeInput} value={value} />;
    }
}
Input.propTypes = {
    placeholder: PropTypes.string,
    onChangeInput: PropTypes.func,
    value: PropTypes.string,
};

export default Input;
