import React, { useState, useEffect, useMemo } from 'react';
import propTypes from 'prop-types';
import './Movie.scss';
import Button from '../../Button';
import Input from '../../Input';
import { defaultImage } from '../../../constants/uiConstants'
import Loader from '../../Loader';
import { NotificationManager } from 'react-notifications';

const Movie = ({ movie, deleteMovie, updateMovie, isLoading }) => {
    const { cover, title, description } = movie;
    const [state, setState] = useState({
        src: cover,
        errored: false,
        title: { isWaitForChange: false },
        cover: { isWaitForChange: false },
        description: { isWaitForChange: false },
        changeParam: '',
        newData: '',
    });
    useEffect(() => {
        setState({ ...state, src: cover })
    }, [cover]);

    const handleDeleteItem = () => deleteMovie(movie.id);
    const onError = () => setState({ ...state, src: defaultImage, errored: true })
    const handleOnDoubleClick = (e) => {
        const key = e.target.getAttribute('name');
        setState((state) => ({ ...state, [key]: { isWaitForChange: !state[key].isWaitForChange } }));
    }
    const handleOnChange = (e) => setState({ ...state, changeParam: e.target.name, newData: e.target.value });

    const handleOnBlur = (e) => {
        if (e.target.value === '') return NotificationManager.error('Please Enter newData for field', 'INPUT ERROR', 2000);
        const { changeParam, newData } = state;
        updateMovie({ changeParam, newData, id: movie.id });
        setState({ ...state, [e.target.name]: { isWaitForChange: false } });
    }
    return isLoading ? <Loader /> : (
        <div className="movie" >
            <div className="movie__header">
                {
                    state.title.isWaitForChange ? (
                        <Input
                            name='title'
                            onBlurInput={handleOnBlur}
                            onChangeInput={handleOnChange}
                            placeholder='enter new title'
                        />
                    )
                        : (
                            <h5 name="title" onDoubleClick={handleOnDoubleClick}>
                                {title}
                            </h5>
                        )
                }
                <Button onButtonClick={handleDeleteItem} title="X" />
            </div>
            {state.cover.isWaitForChange ? (
                <div className="cover__change">
                    <Input
                        name='cover'
                        onBlurInput={handleOnBlur}
                        onChangeInput={handleOnChange}
                        placeholder='enter new cover'
                    />
                </div>
            )
                : <img src={state.src} onError={onError} onDoubleClick={handleOnDoubleClick} name="cover" />}
            {state.description.isWaitForChange ? (
                <div className="description__change">
                    <Input
                        name='description'
                        onBlurInput={handleOnBlur}
                        onChangeInput={handleOnChange}
                        placeholder='enter new description'
                    />
                </div>
            ) : <p onDoubleClick={handleOnDoubleClick} name="description">{description}</p>}
        </div>
    );
}
Movie.propTypes = {
    movie: propTypes.object,
    deleteMovie: propTypes.func,
    updateMovie: propTypes.func,
    isLoading: propTypes.bool,
};
export default Movie;
