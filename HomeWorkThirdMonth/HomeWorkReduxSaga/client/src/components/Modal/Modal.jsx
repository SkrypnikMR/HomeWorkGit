import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button';
import Input from '../Input';

const Modal = ({ postMovies, onButtonClick, title: propsTitle, myClassName: propsShow }) => {
    const [state, setState] = useState({
        title: '',
        cover: '',
        description: '',
        show: false,
        inputs: [{ placeholder: 'enter title here', name: 'title' },
        { placeholder: 'enter cover here', name: 'cover' },
        { placeholder: 'enter description here', name: 'description' }],
    });
    useEffect(() => setState({ ...state, show: propsShow }), [propsShow]);

    const handleOnChange = (e) => setState({ ...state, [`${e.target.name}`]: e.target.value });
    const handleClean = () => setState({ ...state, title: '', cover: '', description: '' })
    const handleAddMovie = () => {
        const { title, cover, description } = state;
        const object = { title, cover, description };
        postMovies(object);
        onButtonClick();
        handleClean();
    }
    const handleBtnHeaderClick = (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('custom__button')) {
            onButtonClick();
            handleClean();
        }
    }
    return (
        <div className={state.show ? 'modal' : 'modal hide'} onClick={handleBtnHeaderClick}>
            <div className="modal__content" >
                <div className="content__header">
                    <h3>{propsTitle}</h3>
                    <Button title="X" onButtonClick={handleBtnHeaderClick} />
                </div>
                <div className="content__body">
                    {state.inputs.map((input) => (
                        <Input
                            key={input.name}
                            name={input.name}
                            value={state[input.name]}
                            placeholder={input.placeholder}
                            onChangeInput={handleOnChange}
                        />
                    ))}
                    <Button
                        title="Add movie"
                        clsNm="movie__add"
                        disabled={!state.cover || !state.description || !state.title}
                        onButtonClick={handleAddMovie}
                    />
                </div>
            </div>
        </div>
    );
}
Modal.propTypes = {
    myClassName: propTypes.bool,
    onButtonClick: propTypes.func,
    title: propTypes.string,
    postMovies: propTypes.func,
};
export default Modal;
