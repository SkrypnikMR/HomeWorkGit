import React, { Component } from 'react';

import './Input.scss';

class Input extends Component {
    render() {
        const { placeholder, onChangeInput } = this.props;
        return <input type="text" placeholder={placeholder} onChange={onChangeInput} />
    }
}
export default Input;