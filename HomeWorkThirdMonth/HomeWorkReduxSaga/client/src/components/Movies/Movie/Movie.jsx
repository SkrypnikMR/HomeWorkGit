import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.scss';
import Button from '../../Button';
import Input from '../../Input';
import { defaultImage } from '../../../constants/uiConstants'

class Movie extends Component {
    constructor(props) {
        super(props);
        const { cover } = props.movie;
        this.state = {
            src: cover,
            errored: false,
            fallBackSrc: defaultImage,
            title: { isWaitForChange: false },
            cover: { isWaitForChange: false },
            description: { isWaitForChange: false },
            changeParam: '',
            newData: '',
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.movie.cover !== this.props.movie.cover) this.setState((state) => ({ ...state, src: this.props.movie.cover }))
    }
    handleDeleteItem = () => {
        const { deleteItem, movie } = this.props;
        deleteItem(movie.id);
    }

    onError = () => {
        const { fallBackSrc } = this.state;
        this.setState({ src: fallBackSrc, errored: true });
    }

    handleOnDoubleClick = (e) => {
        const key = e.target.getAttribute('name');
        this.setState((state) => ({ [key]: { isWaitForChange: !state[key].isWaitForChange, value: '' } }));
    }

    handleOnChange = (e) => this.setState({ changeParam: e.target.name, newData: e.target.value });

    handleOnBlur = (e) => {
        if (e.target.value === '') return;
        const { changeParam, newData } = this.state;
        const { updateItem, movie } = this.props;
        updateItem({ changeParam, newData, id: movie.id });
        this.setState(() => ({ [e.target.name]: { isWaitForChange: false, value: '' } }));
    }

    render() {
        const { movie } = this.props;
        const {
            src,
            title, cover, description } = this.state;
        return (
            <div className="movie" >
                <div className="movie__header">
                    {
                        title.isWaitForChange ? (
                            <Input
                                name='title'
                                onBlurInput={this.handleOnBlur}
                                onChangeInput={this.handleOnChange}
                                placeholder='enter new title'
                            />
                        )
                            : (
                                <h5 name="title" onDoubleClick={this.handleOnDoubleClick}>
                                    {movie.title}
                                </h5>
                            )
                    }
                    <Button onButtonClick={this.handleDeleteItem} title="X" />
                </div>
                {cover.isWaitForChange ? (
                    <div className="cover__change">
                        <Input
                            name='cover'
                            onBlurInput={this.handleOnBlur}
                            onChangeInput={this.handleOnChange}
                            placeholder='enter new cover'
                        />
                    </div>
                )
                    : <img src={src} onError={this.onError} onDoubleClick={this.handleOnDoubleClick} name="cover" />}
                {description.isWaitForChange ? (
                    <div className="description__change">
                        <Input
                            name='description'
                            onBlurInput={this.handleOnBlur}
                            onChangeInput={this.handleOnChange}
                            placeholder='enter new description'
                        />
                    </div>
                ) : <p onDoubleClick={this.handleOnDoubleClick} name="description">{movie.description}</p>}
            </div>
        );
    }
}
Movie.propTypes = {
    movie: propTypes.object,
    deleteItem: propTypes.func,
    updateItem: propTypes.func,
};
export default Movie;
