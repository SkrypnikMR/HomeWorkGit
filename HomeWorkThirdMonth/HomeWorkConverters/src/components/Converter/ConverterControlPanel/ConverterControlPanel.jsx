import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StConvertControl, StDropDownsControl, StSpan } from './styled';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import { lengthOptions, currencyOptions, currencyUAH } from '../../../constants/UICONSTANTS';
import { support } from '../../../helpers/support';

class ConverterControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        };
    }

    handleClick = () => {
        const {
            quantity,
            setConverterTablo,
            from,
            to,
            converterType,
            currency,
            setConverterQuantity } = this.props;
        const { inValid, newQuantity } = support.validateInput(quantity);
        if (inValid) return this.setState(state => ({ ...state, error: 'Only numbers' }));
        if (newQuantity === '') return this.setState(state => ({ ...state, error: 'Please enter value' }));
        const tablo = converterType === 'lengths'
            ? support.convertLengths(newQuantity, from, to)
            : support.convertCurrency(newQuantity, currency, to);
        setConverterTablo(tablo);
        setConverterQuantity('');
    }

    handleOnChange = (e) => {
        const { value } = e;
        const { setConverterQuantity } = this.props;
        setConverterQuantity(value);
    }

    componentDidMount() {
        const { getCurrency, converterType } = this.props;
        if (converterType === 'curency') getCurrency();
    }

    componentDidUpdate(prevProps) {
        const { getCurrency, converterType } = this.props;
        if (converterType === 'curency' && prevProps.converterType !== converterType) getCurrency();
    }

    render() {
        const { converterType, setConverterFrom, setConverterTo, quantity } = this.props;
        const { error } = this.state;
        return (
            <StConvertControl >
                <StDropDownsControl>
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
                    width="90%"
                    onChange={this.handleOnChange}
                    value={quantity}
                />
                <StSpan>{error}</StSpan>
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
    getCurrency: PropTypes.func,
    currency: PropTypes.objectOf(PropTypes.string),
};

export default ConverterControlPanel;
