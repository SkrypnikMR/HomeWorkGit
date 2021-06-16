import React, { Component } from 'react';
import Tablo from './Tablo';
import ConverterControlPanel from './ConverterControlPanel';
import Form from '../UI/Form';


class Converter extends Component {
    render() {
        return (
            <Form>
                <Tablo />
                <ConverterControlPanel />
            </Form>
        );
    }
}

export default Converter;
