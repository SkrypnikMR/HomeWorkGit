import React, { useState } from 'react';
import './Header.scss';
import Button from '../Button';
import Modal from '../Modal';
import { useTheme } from '../hoc/withTheme.jsx';


const Header = () => {
    const [modalState, setModalState] = useState(false);
    const handleBtnClick = () :void => setModalState(!modalState);
    const { theme, setTheme } = useTheme();
    const handleThemeClick = ():void => setTheme(!theme);
    return (
        <header className="header">
            <h1>Movies</h1>
            <div className="header__controll">
                <Button
                    onButtonClick={handleThemeClick}
                    title={theme ? '☀' : '🌚'}
                />
                <Button
                    onButtonClick={handleBtnClick}
                    title="add Movie"
                />
            </div>
            <Modal
                myClassName={modalState}
                onButtonClick={handleBtnClick}
                title='Add new film in collection'
            />
        </header>

    );
}

export default Header;
