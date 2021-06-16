import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StConvertControl, StDropDownsControl } from './styled';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import { lengthOptions, currencyOptions, currencyUAH } from '../../../constants/UICONSTANTS';

class ConverterControlPanel extends Component {
    handleClick = () => {
        const { quantity, setConverterTablo, from, to } = this.props;
        setConverterTablo({ quantity, from, to });
    }

    handleOnChange = (e) => {
        const { value } = e;
        const { setConverterQuantity } = this.props;
        setConverterQuantity(value);
    }

    render() {
        const { converterType, setConverterFrom, setConverterTo } = this.props;
        return (
            <StConvertControl >
                <StDropDownsControl>
                    <p>FROM</p>
                    <Select
                        width="60%"
                        options={converterType === 'lengths' ? lengthOptions : currencyUAH}
                        from
                        to={false}
                        setConverterFrom={setConverterFrom}
                        setConverterTo={setConverterTo}
                        converterType={converterType}
                    />
                    <p>TO</p>
                    <Select
                        width="60%"
                        options={converterType === 'lengths' ? lengthOptions : currencyOptions}
                        from={false}
                        to
                        setConverterTo={setConverterTo}
                        setConverterFrom={setConverterFrom}
                        converterType={converterType}
                    />

                </StDropDownsControl>
                <Input
                    id="convertControlPanelInput"
                    placeholder="Enter your param"
                    width="40%"
                    onChange={this.handleOnChange}
                    label='Only Numbers'
                />
                <Button
                    content="Convert"
                    id="controllButton"
                    onClick={this.handleClick}
                />
            </StConvertControl >
        );
    }
}
ConverterControlPanel.propTypes = {
    converterType: PropTypes.string,
    setConverterFrom: PropTypes.func,
    setConverterTo: PropTypes.func,
    setConverterQuantity: PropTypes.func,
    quantity: PropTypes.string,
    setConverterTablo: PropTypes.func,
    from: PropTypes.string,
    to: PropTypes.string,
};

export default ConverterControlPanel;
