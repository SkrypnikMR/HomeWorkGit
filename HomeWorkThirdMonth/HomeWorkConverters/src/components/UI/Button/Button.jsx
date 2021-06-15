import React from 'react';
import PropTypes from 'prop-types';
import { StButton } from './styled';

const Button = ({
    id,
    name,
    onClick,
    title,
    type = 'button',
    value,
    borderRadius,
    isDisabled,
    color,
    fontSize,
    fontWeight,
    bgColor,
    bgColorHover,
    height,
    width,
    padding,
    margin,
    content,
    transition,
    focusColor,
}) => (
    <StButton
        id={id}
        name={name}
        onClick={onClick}
        type={type}
        value={value}
        title={title}
        borderRadius={borderRadius}
        isDisabled={isDisabled}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        height={height}
        width={width}
        padding={padding}
        margin={margin}
        transition={transition}
        focusColor={focusColor}
    >
        {content}
    </StButton>
);

Button.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    borderRadius: PropTypes.string,
    isDisabled: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    bgColor: PropTypes.string,
    bgColorHover: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    content: PropTypes.string,
    transition: PropTypes.string,
    focusColor: PropTypes.string,
};

export default Button;
