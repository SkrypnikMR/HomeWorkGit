import React from 'react';
import { StHeader } from './styled';
import ControlPanel from './ControlPanel';


const Header = () => {
    return (
        <StHeader>
            <h1>Converter</h1>
            <ControlPanel />
        </StHeader>
    );
};

export default Header;
