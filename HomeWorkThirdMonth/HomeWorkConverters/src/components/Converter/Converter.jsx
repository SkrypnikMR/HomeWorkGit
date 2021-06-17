import React, { Component } from 'react';
import Tablo from './Tablo';
import ConverterControlPanel from './ConverterControlPanel';
import Form from '../UI/Form';
import { StConverter } from './styled';


class Converter extends Component {
    render() {
        return (
            <StConverter>
                <Form>
                    <Tablo />
                    <ConverterControlPanel />
                </Form>
            </StConverter>
        );
    }
}

export default Converter;
