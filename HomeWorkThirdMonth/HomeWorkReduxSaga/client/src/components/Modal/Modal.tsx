import React, { useState, useEffect } from 'react';
import './Modal.scss';
import Button from '../Button';
import Input from '../Input';

interface IModal{
    postMovies: (obj: IpostMovies) => void;
    onButtonClick: () => void;
    title: string;
    myClassName: boolean;
}

interface IpostMovies {
    title: string;
    cover: string;
    description: string;
}

interface IState {
    [key: string]: any;
    title: string;
    cover: string;
    description: string;
    show: boolean;
    inputs: { placeholder: string; name: string }[];
};

const Modal = ({ postMovies, onButtonClick, title: propsTitle, myClassName: propsShow }: IModal) => {
    const [state, setState] = useState<IState>({
        title: '',
        cover: '',
        description: '',
        show: false,
        inputs: [{ placeholder: 'enter title here', name: 'title' },
        { placeholder: 'enter cover here', name: 'cover' },
        { placeholder: 'enter description here', name: 'description' }],
    });
    useEffect(() => setState({ ...state, show: propsShow }), [propsShow]);

    const handleOnChange = (e :React.ChangeEvent<HTMLInputElement> ) => setState({ ...state, [`${e.target.name}`]: e.target.value });
    const handleClean = () => setState({ ...state, title: '', cover: '', description: '' })
    const handleAddMovie = () => {
        const { title, cover, description } = state;
        const object = { title, cover, description };
        postMovies(object);
        onButtonClick();
        handleClean();
    }
    const handleBtnHeaderClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
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

export default Modal;
