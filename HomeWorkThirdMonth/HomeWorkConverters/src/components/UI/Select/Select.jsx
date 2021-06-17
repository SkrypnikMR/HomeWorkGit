import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StSelect, StOption } from './styled';

class MySelect extends Component {
    handleOnChange = (e) => {
        const { from, setConverterFrom, setConverterTo } = this.props;
        if (from) return setConverterFrom(e.target.value);
        setConverterTo(e.target.value);
    }

    componentDidMount = () => {
        const { converterType, setConverterFrom, setConverterTo, from } = this.props;
        if (converterType === 'lengths' && from) setConverterFrom('meters');
        else if (converterType === 'lengths' && !from) setConverterTo('meters');
        else if (converterType !== 'lengths' && from) setConverterFrom('uah');
        else if (converterType !== 'lengths' && !from) setConverterTo('uer');
    }

    render() {
        const { width, options, from, to } = this.props;
        return (
            <StSelect width={width} onChange={this.handleOnChange}>
                {options.map((el, index) => (
                    <StOption
                        id={from ? `${from}${el.name}` : `${to}${el.name}`}
                        value={el.value.toLowerCase()}
                        key={`${el.id + index}`}
                    >
                        {el.name}
                    </StOption>
                ))
                }
                ;
            </StSelect>
        );
    }
}
MySelect.propTypes = {
    width: PropTypes.string,
    options: PropTypes.array,
    from: PropTypes.bool,
    to: PropTypes.bool,
    setConverterFrom: PropTypes.func,
    setConverterTo: PropTypes.func,
    converterType: PropTypes.string,
};

export default MySelect;
