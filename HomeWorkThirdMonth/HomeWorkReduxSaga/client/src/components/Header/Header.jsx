import React, { Component } from 'react';
import './Header.scss';
import Button from '../Button';
import Modal from '../Modal';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalState: false,
        };
    }

    handleBtnClick = () => {
        const { modalState } = this.state;
        this.setState({ modalState: !modalState });
    }

    render() {
        const { modalState } = this.state;
        return (
            <header className="header">
                <h1>Movies</h1>
                <Button onButtonClick={this.handleBtnClick} title="add Movie" />
                <Modal myClassName={modalState} onButtonClick={this.handleBtnClick} title='Add new film in collection' />
            </header>

        );
    }
}

export default Header;
