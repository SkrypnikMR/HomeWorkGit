import React, { Component } from 'react';

import './Input.scss';

class Input extends Component {
    render() {
        const { placeholder, onChangeInput, value } = this.props;
        return <input type="text" placeholder={placeholder} onChange={onChangeInput} value={value}/>
    }
}
export default Input;