/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button';
import Input from '../Input';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cover: '',
            description: '',
            inputs: [{ placeholder: 'enter title here', onChange: this.handleOnChange, name: 'title' },
            { placeholder: 'enter cover here', onChange: this.handleOnChange, name: 'cover' },
            { placeholder: 'enter description here', onChange: this.handleOnChange, name: 'description' }],

        };
    }

    handleOnChange = (e) => this.setState({ [`${e.target.name}`]: e.target.value });

    handleClean = () => this.setState({ title: '', cover: '', description: '' })

    handleAddMovie = () => {
        const { postMovies, onButtonClick } = this.props;
        const { title, cover, description } = this.state;
        const object = { title, cover, description };
        postMovies(object);
        onButtonClick();
        this.handleClean();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const { myClassName } = this.props;
            this.setState({ myClassName });
        }
    }

    handleBtnHeaderClick = (e) => {
        const { onButtonClick } = this.props;
        if (e.target.classList.contains('modal') || e.target.classList.contains('custom__button')) {
            onButtonClick();
            this.handleClean();
        }
    }

    render() {
        const { myClassName, inputs, title: inputTitle, cover, description } = this.state;
        const { title } = this.props;
        return (
            <div className={myClassName ? 'modal' : 'modal hide'} onClick={this.handleBtnHeaderClick}>
                <div className="modal__content" >
                    <div className="content__header">
                        <h3>{title}</h3>
                        <Button title="X" onButtonClick={this.handleBtnHeaderClick} />
                    </div>
                    <div className="content__body">
                        {inputs.map((input) => (
                            <Input
                                key={input.name}
                                name={input.name}
                                value={this.state[input.name]}
                                placeholder={input.placeholder}
                                onChangeInput={input.onChange}
                            />
                        ))}
                        <Button
                            title="Add movie"
                            clsNm="movie__add"
                            disabled={!(inputTitle && cover && description)}
                            onButtonClick={this.handleAddMovie}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    myClassName: propTypes.bool.isRequired,
    onButtonClick: propTypes.func,
    title: propTypes.string.isRequired,
    postMovies: propTypes.func,
};
export default Modal;
