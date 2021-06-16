import React from 'react';
import { StAppDiv } from './styled';
import Header from '../Header';
import Converter from '../Converter';

const App = () => {
    return (
        <StAppDiv>
            <Header />
            <Converter />
        </StAppDiv>
    );
};

export default App;
