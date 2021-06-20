import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { StControl, StModal, StNotes, StUl, StLi } from './styled';
import Button from '../../UI/Button';
import { support } from '../../../helpers/support';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleBtnOnclick = (e) => {
        const { setConverterType, converterType, setConverterTo, setConverterFrom } = this.props;
        setConverterType(e.target.id);
        support.lsSet('converterType', e.target.id);
        if (converterType !== 'lengths') {
            setConverterFrom('meters');
            setConverterTo('versts');
        } else {
            setConverterFrom('UAH');
            setConverterTo('EUR');
        }
    }

    render() {
        const { converterType, notes } = this.props;
        const { showModal } = this.state;
        return (
            <StControl >
                <h1>Change converter to</h1>
                <Button
                    id="lengths"
                    name="converter_Lengths"
                    borderRadius="0px"
                    height="50px"
                    width="100px"
                    margin="0 10px 0 0"
                    content="Length"
                    disabled={converterType === 'lengths'}
                    onClick={this.handleBtnOnclick}
                />
                <h1>Or</h1>
                <Button
                    id="curency"
                    name="converter_Currency"
                    borderRadius="0px"
                    height="50px"
                    width="100px"
                    margin="0 10px 0 0"
                    disabled={converterType !== 'lengths'}
                    content="Currency"
                    onClick={this.handleBtnOnclick}
                />
                <Button
                    id="modal_btn"
                    name="modal_btn"
                    borderRadius="0px"
                    height="50px"
                    width="100px"
                    margin="0 10px 0 0"
                    content="Show All Results"
                    onClick={this.handleOpenModal.bind(this)}
                />
                <Modal
                    isOpen={showModal}
                    contentLabel="Minimal Modal Example"
                    ariaHideApp={false}
                    style={StModal}
                >
                    <Button
                        id="modal_btn-close"
                        name="modal_btn-close"
                        borderRadius="0px"
                        height="50px"
                        width="100px"
                        margin="0 10px 0 0"
                        content="X"
                        onClick={this.handleCloseModal.bind(this)}
                    />
                    <StNotes>
                        <h1>Your Converter Results</h1>
                        <StUl>
                            {notes.length > 0 ? notes.map((el) => {
                                return (
                                    <StLi key={`${el.tablo}${el.from}`}>
                                        <p>
                                            {el.tablo}
                                            <span>{el.from.toUpperCase()}</span>
                                            from
                                            <span>{el.to.toUpperCase()}</span>
                                        </p>
                                    </StLi>
                                );
                            }) : <p>You don&apos;t have some notes</p>}
                        </StUl>
                    </StNotes>
                </Modal>
            </StControl >
        );
    }
}
ControlPanel.propTypes = {
    setConverterType: PropTypes.func.isRequired,
    converterType: PropTypes.string.isRequired,
    setConverterFrom: PropTypes.func.isRequired,
    setConverterTo: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ControlPanel;
