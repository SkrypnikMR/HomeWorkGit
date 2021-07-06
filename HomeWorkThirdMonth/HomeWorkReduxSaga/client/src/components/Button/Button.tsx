import React, { Component } from 'react';
import './Button.scss';

interface IButton{
    onButtonClick: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    title: string;
    clsNm?: string;
    disabled?: boolean;
}

const Button = ({ onButtonClick, title, clsNm, disabled }: IButton) => (
    <button
        disabled={disabled}
        onClick={onButtonClick}
        className={clsNm || 'custom__button'}>
        {title}
    </button>
);

export default Button;
