import React from 'react';
import { StHeader } from './styled';
import ControlPanel from './ControlPanel';


function Header() {
    return (
        <StHeader>
            <h1>Converter</h1>
            <ControlPanel />
        </StHeader>
    );
}

export default Header;
