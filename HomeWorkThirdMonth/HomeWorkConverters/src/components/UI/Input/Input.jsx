import React from 'react';
import PropTypes from 'prop-types';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';

const Input = ({
    id,
    type = 'text',
    name,
    width,
    label,
    value,
    height,
    margin,
    onChange,
    maxLength,
    inputHeight,
    borderRadius,
    placeholder, // ToDo add text from translation lib React i18 next
    errorMessage,
}) => {
    const handleOnchange = e => onChange({ name: e.target.name, value: e.target.value });
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                name={name}
                type={type}
                value={value}
                margin={margin}
                onChange={handleOnchange}
                maxLength={maxLength}
                borderRadius={borderRadius}
                inputHeight={inputHeight}
                placeholder={placeholder}
            />
            {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
        </StInputContainer>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    value: PropTypes.string,
    margin: PropTypes.string,
    height: PropTypes.string,
    inputHeight: PropTypes.string,
    maxLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    borderRadius: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
};

export default Input;
