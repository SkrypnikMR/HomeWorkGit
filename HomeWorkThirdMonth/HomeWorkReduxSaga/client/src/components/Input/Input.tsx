import React from 'react';
import './Input.scss';

interface IInput{
    placeholder: string;
    value: string;
    name: string;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlurInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, onChangeInput, value, name, onBlurInput }: IInput) => {
    return (
        <input
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            onChange={onChangeInput}
            value={value}
            name={name}
            autoFocus
            onBlur={onBlurInput}
        />
    );
}


export default Input;
