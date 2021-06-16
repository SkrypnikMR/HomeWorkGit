import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StControl } from './styled';
import Button from '../../UI/Button';

class ControlPanel extends Component {
    handleBtnOnclick = (e) => {
        const { setConverterType, converterType, setConverterTo, setConverterFrom } = this.props;
        setConverterType({ value: e.target.id });
        if (converterType !== 'lengths') {
            setConverterFrom('meters');
            setConverterTo('versts');
        } else {
            setConverterFrom('UAH');
            setConverterTo('EUR');
        }
    }

    render() {
        const { converterType } = this.props;
        return (
            <StControl >
                <h1>Change converter to</h1>
                <Button
                    id="lengths"
                    name="converter_Lengths"
                    borderRadius="0px"
                    height="50px"
                    width="100px"
                    margin="0 10px 0 0"
                    content="Length"
                    disabled={converterType === 'lengths'}
                    onClick={this.handleBtnOnclick}
                />
                <h1>Or</h1>
                <Button
                    id="curency"
                    name="converter_Currency"
                    borderRadius="0px"
                    height="50px"
                    width="100px"
                    margin="0 10px 0 0"
                    disabled={converterType !== 'lengths'}
                    content="Currency"
                    onClick={this.handleBtnOnclick}
                />
            </StControl >
        );
    }
}
ControlPanel.propTypes = {
    setConverterType: PropTypes.func.isRequired,
    converterType: PropTypes.string.isRequired,
    setConverterFrom: PropTypes.func.isRequired,
    setConverterTo: PropTypes.func.isRequired,
};

export default ControlPanel;
