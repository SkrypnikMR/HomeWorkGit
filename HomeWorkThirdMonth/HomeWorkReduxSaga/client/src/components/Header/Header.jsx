import React, { useState } from 'react';
import './Header.scss';
import Button from '../Button';
import Modal from '../Modal';

const Header = () => {
    const [modalState, setModalState] = useState(false);
    const handleBtnClick = () => setModalState(!modalState);
    return (
        <header className="header">
            <h1>Movies</h1>
            <Button onButtonClick={handleBtnClick} title="add Movie" />
            <Modal myClassName={modalState} onButtonClick={handleBtnClick} title='Add new film in collection' />
        </header>

    );
}

export default Header;
