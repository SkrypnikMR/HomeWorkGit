import React, { Component } from 'react';
import './Header.scss';
import Button from '../Button';
import { ThemeContext } from '../../context/themeContext';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>React Timer</h1>
                <ThemeContext.Consumer>
                    {(context) => {
                        const { toggleTheme, bulb } = context;
                        return <Button onButtonClick={toggleTheme} disabled={false} title={bulb} />;
                    }}
                </ThemeContext.Consumer>
            </header>
        );
    }
}

export default Header;
